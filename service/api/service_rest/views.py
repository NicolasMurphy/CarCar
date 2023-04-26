from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Technician, Appointment
from .encoders import TechnicianListEncoder, AppointmentListEncoder


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_delete_technician(request, id):
    count, _ = Technician.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"}, status=400
            )
        appointment = Appointment.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_delete_appointment(request, id):
    count, _ = Appointment.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})

@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.cancel()
    return JsonResponse(
        appointment,
        encoder=AppointmentListEncoder,
        safe=False,
    )

@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    appointment = Appointment.objects.get(id=id)
    appointment.finish()
    return JsonResponse(
        appointment,
        encoder=AppointmentListEncoder,
        safe=False,
    )
