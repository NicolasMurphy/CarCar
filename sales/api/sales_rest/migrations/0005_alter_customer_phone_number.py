# Generated by Django 4.0.3 on 2023-04-24 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_customer_phone_number_alter_sale_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.PositiveBigIntegerField(primary_key=True, serialize=False),
        ),
    ]