# Generated by Django 4.0.3 on 2023-04-25 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_alter_appointment_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='is_vip',
            field=models.BooleanField(default=False),
        ),
    ]
