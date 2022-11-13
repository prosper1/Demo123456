# Generated by Django 3.2.3 on 2022-11-13 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taxi', '0006_auto_20221112_1913'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rankingtaxis',
            old_name='position',
            new_name='main_position',
        ),
        migrations.AddField(
            model_name='driver',
            name='driver_face_card',
            field=models.ImageField(default='pic_folder/None/no-img.png', upload_to='images/', verbose_name='face-pic'),
        ),
        migrations.AddField(
            model_name='rankingtaxis',
            name='second_position',
            field=models.CharField(default='EB40', max_length=20),
            preserve_default=False,
        ),
    ]
