from django.shortcuts import render, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import viewsets
from django.http.response import JsonResponse
from .models import Driver, Rank, RankingTaxis,Taxi,PaymentMethod, TaxiStatus
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    DriverSerializer,
    RankSerializer,
    RankingTaxisSerializer,
    TaxiSerializer,
    UserDetailsSerializer,
    PaymentSerializer,
    TaxiStatusSerializers
)
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
import requests
from django.core.mail import send_mail

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
        'ranking_taxis__destination__name',
        'location'
    ]


class TaxiViewSet(viewsets.ModelViewSet):
    serializer_class = TaxiSerializer
    queryset = Taxi.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = (
        'manufature',
        'model',
        'driver'
    ) 

class RankingTaxisViewSet(viewsets.ModelViewSet):
    serializer_class = RankingTaxisSerializer
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]
    queryset = RankingTaxis.objects.all()
    filter_backends = (DjangoFilterBackend, SearchFilter)

    search_fields = [
       'destination'
    ]
   


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
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat +',' +lng+ '&types=sublocality&radius=40000&key=AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU'
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
    url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat +',' +lng+ 'type=postal_town&radius=40000&key=AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU'
    places = requests.get(url).content

    places_json = json.loads(places)

    print(places_json)
    """Check username availability"""
    response = {
        'data': places_json['results'],
        
    }

    print(response)
    return JsonResponse(data=response)

@csrf_exempt
def get_km(request,origin,destination):
    """
    Uses google places api to fetch nearby place
    """
    url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + origin + '&destinations=' + destination + '&units=kilometer&key=AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU'
    distance = requests.get(url).content
    

    distance_json = json.loads(distance)

    """Check username availability"""
    response = {
        'data': distance_json,
    }

    print(response)
    return JsonResponse(data=response)


class DistanceView(APIView):
    """
    Uses google places api to fetch nearby place
    """
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        origin = request.data['origin']
        destination  = request.data['destination']
        url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + origin + '&destinations=' + destination + '&units=kilometer&key=AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU'
        distance = requests.get(url).content
    

        distance_json = json.loads(distance)

        """Check username availability"""
        response = {
            'data': distance_json,
        }
        return JsonResponse(data=response)


class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = DriverSerializer
    queryset = PaymentMethod.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]
    

    def get_queryset(self):
        driver = self.request.user
        return PaymentMethod.objects.filter(pay_taxi__driver__user=driver)


class TaxiStatusViewSet(viewsets.ModelViewSet):
    serializer_class = TaxiSerializer
    queryset = TaxiStatus.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]
    

    #modify post (gaurd from other taxi drivers from changing this)

class DriverTaxiStatusViewSet(viewsets.ModelViewSet):
    serializer_class = TaxiStatusSerializers
    queryset = TaxiStatus.objects.all().order_by('-id')
    filter_backends = (DjangoFilterBackend,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = [
        BasicAuthentication,
        TokenAuthentication,
        SessionAuthentication,
    ]
    

    def get_queryset(self):
        driver = self.request.user

        status = TaxiStatus.objects.filter(taxi__driver__user=driver)

        if not status:
            taxi = Taxi.objects.filter(driver__user=driver)
            if taxi:
                taxi_status = TaxiStatus.objects.create(taxi=taxi[0])
                taxi_status.save()
                status = TaxiStatus.objects.filter(taxi__driver__user=driver)

        return status
    

    
class EmailSendView(APIView):
    """
    Sends emails
    """
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        send_mail(
                'Registration Complete',
                'You or someone pretending to be you, registered successfully on findtaxi.',
                'no-reply@findtaxi.com',
                ['gundotshili@gmail.com'],
                fail_silently=False,
            )
        print("email sent")
        
        """Check username availability"""
        response = {
            'message': "email_sent",
        }
        return JsonResponse(data=response)



            