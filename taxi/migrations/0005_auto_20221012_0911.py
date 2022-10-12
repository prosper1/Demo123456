# Generated by Django 3.2.3 on 2022-10-12 09:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('taxi', '0004_alter_rankingtaxis_destination'),
    ]

    operations = [
        migrations.AddField(
            model_name='driver',
            name='driver_cellphone',
            field=models.CharField(default='333', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='driver',
            name='driver_homeaddress',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='driver',
            name='driver_registrationID',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='passanger',
            name='card_number',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='passanger',
            name='dest_spot',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='passanger',
            name='pass_cellphone',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='passanger',
            name='payment_method',
            field=models.CharField(default='pay', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='taxi',
            name='driver',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='taxi.driver'),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='paymentMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pay_option', models.CharField(max_length=200)),
                ('pay_taxi', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='taxi.taxi')),
                ('pay_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]