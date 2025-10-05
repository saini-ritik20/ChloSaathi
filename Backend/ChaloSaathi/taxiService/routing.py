# taxiService/routing.py
from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/drivers/(?P<area>[^/]+)/?$", consumers.DriverAreaConsumer.as_asgi()),
]
