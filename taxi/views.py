from telnetlib import STATUS
from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import Driver, Rank,Taxi
from rest_framework.response import Response
from rest_framework import status
from .serializers import DriverSerializer, RankSerializer, TaxiSerializer, UserDetailsSerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import authenticate, get_user_model
from rest_framework.authentication import (
    BasicAuthentication,
    TokenAuthentication,
    SessionAuthentication,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView

# Create your views here.

class RankViewSet(viewsets.ModelViewSet):
    serializer_class = RankSerializer
    queryset = Rank.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend,)
    filter_fields = (
        'name',
    ) 


class TaxiViewSet(viewsets.ModelViewSet):
    serializer_class = TaxiSerializer
    queryset = Taxi.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend,)
    filter_fields = (
        'manufature',
        'model'
    ) 


class UserDetailsView(RetrieveUpdateAPIView):
    """
    Reads and updates UserModel fields
    Accepts GET, PUT, PATCH methods.

    Default accepted fields: username, first_name, last_name
    Default display fields: pk, username, email, first_name, last_name
    Read-only fields: pk, email

    Returns UserModel fields.
    """
    serializer_class = UserDetailsSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]

    def get_object(self):
        return self.request.user

    def get_queryset(self):
        """
        Adding this method since it is sometimes called when using
        django-rest-swagger
        """
        return get_user_model().objects.none()


class DriverViewSet(viewsets.ModelViewSet):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]
    filter_fields = (
        'manufature',
        'model'
    ) 


def api(request):
    return HttpResponse(content={"user":"gundo"},status=200)
