from django.contrib import admin
from .models import Passanger, Rank, RankingTaxis, Destination, Taxi, Driver, PaymentMethod

# Register your models here.

admin.site.register(Passanger)
admin.site.register(Rank)
admin.site.register(RankingTaxis)
admin.site.register(Destination)
admin.site.register(Taxi)
admin.site.register(Driver)
admin.site.register(PaymentMethod)

