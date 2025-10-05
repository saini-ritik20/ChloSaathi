# from django.apps import AppConfig


# class TaxiserviceConfig(AppConfig):
#     default_auto_field = 'django.db.models.BigAutoField'
#     name = 'taxiService'

# taxiService/apps.py
from django.apps import AppConfig

class TaxiServiceConfig(AppConfig):
    name = 'taxiService'

    def ready(self):
        import taxiService.signals  # noqa
