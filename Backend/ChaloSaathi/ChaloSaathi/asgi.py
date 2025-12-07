"""
ASGI config for ChaloSaathi project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""
"""
ASGI config for ChaloSaathi project.
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
import taxiService.routing

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ChaloSaathi.settings")

django_asgi_app = get_asgi_application()

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": URLRouter(
        taxiService.routing.websocket_urlpatterns
    ),
})

