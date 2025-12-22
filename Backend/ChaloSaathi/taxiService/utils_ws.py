# taxiService/utils_ws.py
import json
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


def broadcast_driver_to_area(driver, action="update"):
    channel_layer = get_channel_layer()

    # Handle both dict and model cases safely
    def get_value(obj, attr):
        if isinstance(obj, dict):
            return obj.get(attr)
        return getattr(obj, attr, None)

    area = (get_value(driver, "area") or "").lower().strip()
    group_name = f"drivers_area_{area}"

    payload = {
        "action": action,
        "driver": {
            "id": get_value(driver, "id"),
            "name": get_value(driver, "full_name"),
            "lat": get_value(driver, "lat"),
            "lng": get_value(driver, "lng"),
            "status": get_value(driver, "status"),
            "area": area,
            "vehicle_number": get_value(driver, "vehicle_number"),
        },
    }

    # Send to WebSocket group
    async_to_sync(channel_layer.group_send)(
        group_name,
        {
            "type": "driver_update",
            "payload": payload
        }
    )

def send_driver_to_search(search_id, driver, distance):
    channel_layer = get_channel_layer()

    payload = {
        "action": "update",
        "driver": {
            "id": driver.id,
            "name": driver.full_name,
            "lat": driver.lat,
            "lng": driver.lng,
            "status": driver.status,
            "distance": round(distance, 2),
        },
    }

    async_to_sync(channel_layer.group_send)(
        f"ride_search_{search_id}",
        {
            "type": "driver_update",
            "payload": payload
        }
    )
