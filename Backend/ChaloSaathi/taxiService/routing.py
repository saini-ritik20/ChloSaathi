from django.urls import re_path
from .consumers import DriverAreaConsumer, RideSearchConsumer

websocket_urlpatterns = [
    re_path(r"ws/drivers/(?P<area>[-\w\s]+)/$", DriverAreaConsumer.as_asgi()),
    re_path(r"ws/ride-search/(?P<search_id>[^/]+)/$", RideSearchConsumer.as_asgi()),
]