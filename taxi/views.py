from telnetlib import STATUS
from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework import viewsets
from django.http.response import JsonResponse
from .models import Driver, Rank, RankingTaxis,Taxi
from rest_framework.response import Response
from rest_framework import status
from .serializers import DriverSerializer, RankSerializer, RankingTaxisSerializer, TaxiSerializer, UserDetailsSerializer
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
import json

# Create your views here.

class RankViewSet(viewsets.ModelViewSet):
    serializer_class = RankSerializer
    queryset = Rank.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = (
        'name',
        'ranking_taxis__destination'
    )

    search_fields = [
        'name',
        'ranking_taxis__destination__name'
    ]


class TaxiViewSet(viewsets.ModelViewSet):
    serializer_class = TaxiSerializer
    queryset = Taxi.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = (
        'manufature',
        'model'
    ) 

class RankingViewSet(viewsets.ModelViewSet):
    serializer_class = RankingTaxisSerializer
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]
    queryset = RankingTaxis.objects.all()
   


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
    

    # def get_queryset(self):
    #     return self.request.user.accounts.all()


def api(request):
    return HttpResponse(content={"user":"gundo"},status=200)


class PlacesView(APIView):
    """
    Uses google places api to fetch nearby place
    """
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        lat = request.data['lat']
        lng = request.data['lng']
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat +',' +lng+ '&types=sublocality&radius=40000&key=AIzaSyBqCDnIcScKQYqh_L496sRnZd2n4Ql0ymo'
        places = requests.get(url).content

        places_json = json.loads(places)

        print(places_json)
        """Check username availability"""
        response = {
            'data': places_json['results'],
            
        }
        return JsonResponse(data=response)


def get_places(request,lat,lng):
    """
    Uses google places api to fetch nearby place
    """
    url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat +',' +lng+ 'type=postal_town&radius=40000&key=AIzaSyBqCDnIcScKQYqh_L496sRnZd2n4Ql0ymo'
    places = requests.get(url).content

    places_json = json.loads(places)

    print(places_json)
    """Check username availability"""
    response = {
        'data': places_json['results'],
        
    }

    print(response)
    return JsonResponse(data=response)