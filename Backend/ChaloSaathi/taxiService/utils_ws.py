# taxiService/utils_ws.py
import json
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

def broadcast_driver_to_area(driver, action="update"):
    """
    driver: model instance or dict with fields id, full_name, lat, lng, status, area, vehicle_number...
    action: 'update' | 'remove' | 'create'
    """
    channel_layer = get_channel_layer()
    area = (driver.area or "").lower().strip()
    group_name = f"drivers_area_{area}"
    payload = {
        "action": action,
        "driver": {
            "id": driver.id,
            "name": getattr(driver, "full_name", None) or driver.get("full_name"),
            "lat": getattr(driver, "lat", None) or driver.get("lat"),
            "lng": getattr(driver, "lng", None) or driver.get("lng"),
            "status": getattr(driver, "status", None) or driver.get("status"),
            "area": area,
            "vehicle_number": getattr(driver, "vehicle_number", None) or driver.get("vehicle_number"),
        }
    }
    async_to_sync(channel_layer.group_send)(
        group_name,
        {
            "type": "driver_update",
            "payload": payload
        }
    )
