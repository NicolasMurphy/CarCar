from django.shortcuts import render
from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from .models import Salesperson, Customer, Sale, AutomobileVO

# Create your views here.

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
    ]
    def get_extra_data(self, o):
        return {"vin": o.auto.vin}


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salesperson = Salesperson.objects.all()
        return JsonResponse (
            {"salesperson": salesperson},
            encoder=SalespersonListEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_salespeople(request, id):
    count,_ = Salesperson.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})



@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )

    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_customers(request, id):
    count,_ = Customer.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            sales,
            encoder=SaleListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SaleListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_sales(request, id):
    count,_ = Sale.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})
