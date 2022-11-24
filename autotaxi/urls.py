"""autotaxi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from taxi.views import (
    api,
    RankViewSet,
    TaxiViewSet,
    UserDetailsView,
    DriverViewSet,
    PlacesView,
    get_places,
    PaymentViewSet,
    TaxiStatusViewSet,
    get_km,
    DistanceView,
    DriverTaxiStatusViewSet,
    RankingTaxisViewSet,
)
from rest_framework.routers import DefaultRouter


api_urls = DefaultRouter()
api_urls.register('ranks', RankViewSet)
api_urls.register('taxi', TaxiViewSet)
api_urls.register('drivers', DriverViewSet)
api_urls.register('paid-passengers',PaymentViewSet)
api_urls.register('taxi-status',TaxiStatusViewSet)
api_urls.register('driver-taxi-status',DriverTaxiStatusViewSet)
api_urls.register('ranking-taxis',RankingTaxisViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(api_urls.urls)),
    path('user/', UserDetailsView.as_view(), name='rest_user_details'),
    # path('accounts/', include('allauth.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('get-places/<slug:lat>/<slug:lng>/', get_places,name='get_places'),
    path('places/', PlacesView.as_view(), name='place'),
    path('distance/', DistanceView.as_view(), name='distance'),
    path('get-kms/', get_km, name='get_kms')
]
