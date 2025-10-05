# taxiService/signals.py
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Driver
from .utils_ws import broadcast_driver_to_area

@receiver(post_save, sender=Driver)
def driver_saved(sender, instance, created, **kwargs):
    action = "create" if created else "update"
    # ensure instance has lat/lng/status fields; if not, adapt accordingly.
    broadcast_driver_to_area(instance, action=action)

@receiver(post_delete, sender=Driver)
def driver_deleted(sender, instance, **kwargs):
    broadcast_driver_to_area({
        "id": instance.id,
        "full_name": instance.full_name,
        "area": instance.area,
        "status": "removed",
    }, action="remove")
