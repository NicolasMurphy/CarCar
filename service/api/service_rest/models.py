from django.db import models
from django.urls import reverse


# class Status(models.Model):
#     name = models.CharField(max_length=10)

#     def __str__(self):
#         return self.name

#     class Meta:
#         ordering = ("id",)  # Default ordering for Status
#         verbose_name_plural = "statuses"  # Fix the pluralization


class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.PositiveSmallIntegerField()

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)


class Appointment(models.Model):
    # date_time = models.DateTimeField()
    reason = models.CharField(max_length=100)
    # status = models.CharField(max_length=10)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )


# maybe status like this?
    # status = models.ForeignKey(
    #     Status,
    #     related_name="appointments",
    #     on_delete=models.PROTECT,
    # )

    # def cancel(self):
    #     status = Status.objects.get(name="CANCELLED")
    #     self.status = status
    #     self.save()

    # def finish(self):
    #     status = Status.objects.get(name="FINISHED")
    #     self.status = status
    #     self.save()

    # @classmethod
    # def create(cls, **kwargs):
    #     kwargs["status"] = Status.objects.get(name="CREATED")
    #     appointment = cls(**kwargs)
    #     appointment.save()
    #     return appointment
