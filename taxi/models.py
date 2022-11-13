from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Passanger(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="passenger")
    pass_cellphone = models.CharField(max_length=200)
    dest_spot = models.CharField(max_length=200)
    card_number = models.CharField(max_length=200)
    payment_method = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.user.username + '|' + self.user.first_name


class Driver(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="driver")
    driver_registrationID = models.CharField(max_length=30)
    driver_cellphone = models.CharField(max_length=200)
    driver_homeaddress = models.CharField(max_length=200)

#edited this
class Taxi(models.Model):
    registration = models.CharField(max_length=200)
    manufature = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    driver = models.ForeignKey(Driver,on_delete=models.CASCADE)

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
    main_position = models.CharField(max_length=20)
    second_position = models.CharField(max_length=20)
    price = models.DecimalField(decimal_places=2,max_digits=5)

    def __str__(self) -> str:
        return self.taxi.model + ' >> ' + self.destination.name

class Rank(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length = 200)
    ranking_taxis = models.ManyToManyField(RankingTaxis)

    def __str__(self) -> str:
        return self.name

class paymentMethod(models.Model):
    pay_user = models.ForeignKey(User,on_delete=models.CASCADE)
    pay_option = models.CharField(max_length=200)
    pay_taxi = models.ForeignKey(Taxi,on_delete=models.CASCADE)
    price = models.DecimalField(decimal_places=2,max_digits=5)

