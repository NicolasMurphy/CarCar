from django.contrib import admin
from .models import Sale, Salesperson, Customer

# Register your models here.

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass

@admin.register(Salesperson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass
