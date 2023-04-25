from django.contrib import admin

from .models import Status, Technician, AutomobileVO, Appointment

@admin.register(Status)
class StatusAdmin(admin.ModelAdmin):
    pass

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    pass
