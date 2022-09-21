from telnetlib import STATUS
from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import Rank,Taxi
from rest_framework.response import Response
from rest_framework import status
from .serializers import RankSerializer, TaxiSerializer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

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


def api(request):
    return HttpResponse(content={"user":"gundo"},status=200)
