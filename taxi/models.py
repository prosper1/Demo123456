from pyexpat import model
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Passanger(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="passenger")

    def __str__(self) -> str:
        return self.user.username + '|' + self.user.first_name


class Driver(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="driver")


#edited this
class Taxi(models.Model):
    registration = models.CharField(max_length=200)
    manufature = models.CharField(max_length=200)
    model = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.manufature + '-' + self.model

class Destination(models.Model):
    name = models.CharField(max_length=200)
    lat = models.FloatField()
    lan = models.FloatField()

    def __str__(self) -> str:
        return self.name


class RankingTaxis(models.Model):
    taxi = models.ForeignKey(Taxi,on_delete=models.CASCADE)
    destination = models.ForeignKey(Destination,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.taxi.model

class Rank(models.Model):
    name = models.CharField(max_length=200)
    ranking_taxis = models.ManyToManyField(RankingTaxis)

    def __str__(self) -> str:
        return self.name

