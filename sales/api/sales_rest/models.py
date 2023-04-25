from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin

class Salesperson(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    employee_id = models.PositiveSmallIntegerField()

class Customer(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    address = models.CharField(max_length=60)
    phone_number = models.PositiveBigIntegerField()

class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    price = models.PositiveIntegerField()
