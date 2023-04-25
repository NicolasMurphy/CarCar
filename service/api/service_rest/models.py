from django.db import models


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
    #     related_name="presentations",
    #     on_delete=models.PROTECT,
    # )

    # def approve(self):
    #     status = Status.objects.get(name="APPROVED")
    #     self.status = status
    #     self.save()

    # def reject(self):
    #     status = Status.objects.get(name="REJECTED")
    #     self.status = status
    #     self.save()

    # @classmethod
    # def create(cls, **kwargs):
    #     kwargs["status"] = Status.objects.get(name="SUBMITTED")
    #     presentation = cls(**kwargs)
    #     presentation.save()
    #     return presentation
