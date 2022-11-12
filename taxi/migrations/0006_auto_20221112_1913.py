# Generated by Django 3.2.3 on 2022-11-12 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taxi', '0005_auto_20221012_0911'),
    ]

    operations = [
        migrations.AddField(
            model_name='paymentmethod',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=5),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rank',
            name='location',
            field=models.CharField(default='Pretoria', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rankingtaxis',
            name='position',
            field=models.CharField(default='EB40', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rankingtaxis',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=5),
            preserve_default=False,
        ),
    ]
