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
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "automobile",
        "salesperson",
        "customer",
        "price",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalespersonListEncoder(),
        "customer": CustomerListEncoder(),
        }



@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse (
            {"salespeople": salespeople},
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
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
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
            {"sales": sales},
            encoder=SaleListEncoder,
        )

    else:
        content = json.loads(request.body)

        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson"},
                status=400,
            )

        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            automobile.sold = True
            automobile.save()
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin"},
                status=400,
            )

        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=400,
            )

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
