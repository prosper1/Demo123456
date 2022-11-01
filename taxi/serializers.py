from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth import authenticate, get_user_model
from django.db.models import fields
from rest_framework import serializers
from .models import Driver, Taxi, Rank, Destination, RankingTaxis
from drf_extra_fields.fields import Base64ImageField, Base64FileField
from django.conf import settings


# Get the UserModel
UserModel = get_user_model()


class TaxiSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Taxi
        fields = [
            'id',
            'model',
            'manufature',
            'registration'
        ]

class RankSerializer(serializers.ModelSerializer):
    ranking_taxis = serializers.HyperlinkedRelatedField(
        view_name='rank-detail',
        lookup_field='destination',
        many=True,
        read_only=True
    )
    
    class Meta:
        model = Rank
        fields = [
            'id',
            'name',
            'ranking_taxis',
        ]


class UserSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = [
            'pk',
            'email',
            'username',
            'first_name',
            'last_name',
        ]

class UserDetailsSerializer(serializers.ModelSerializer):
    """
    User model w/o password
    """

    @staticmethod
    def validate_username(username):
        if 'allauth.account' not in settings.INSTALLED_APPS:
            # We don't need to call the all-auth
            # username validator unless its installed
            return username

        from allauth.account.adapter import get_adapter
        username = get_adapter().clean_username(username)
        return username

    class Meta:
        extra_fields = []
        # see https://github.com/iMerica/dj-rest-auth/issues/181
        # UserModel.XYZ causing attribute error while importing other
        # classes from `serializers.py`. So, we need to check whether the auth model has
        # the attribute or not
        if hasattr(UserModel, 'USERNAME_FIELD'):
            extra_fields.append(UserModel.USERNAME_FIELD)
        if hasattr(UserModel, 'EMAIL_FIELD'):
            extra_fields.append(UserModel.EMAIL_FIELD)
        if hasattr(UserModel, 'first_name'):
            extra_fields.append('first_name')
        if hasattr(UserModel, 'last_name'):
            extra_fields.append('last_name')
        model = UserModel
        fields = ('pk', *extra_fields)
        read_only_fields = ('email',)


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = [
            'id',
            'user',
            'driver_cellphone',
            'driver_registrationID',
            'driver_homeaddress'
        ]