# taxiService/routing.py
from django.urls import re_path
from .consumers import DriverAreaConsumer


websocket_urlpatterns = [
    re_path(r"ws/drivers/(?P<area>[-\w\s]+)/$", DriverAreaConsumer.as_asgi()),
]
