from django.contrib.auth.models import User
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Taxi, Rank, Destination, RankingTaxis
from drf_extra_fields.fields import Base64ImageField, Base64FileField





class TaxiSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Taxi
        fields = [
            'id',
            'name',
           
        ]

class RankSerializer(serializers.ModelSerializer):
    
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

