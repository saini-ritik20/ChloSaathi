from django.contrib import admin
from .models import Login, Contact,Driver,Customer

admin.site.register(Login)
admin.site.register(Contact)
admin.site.register(Customer)
admin.site.register(Driver)