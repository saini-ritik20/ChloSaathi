# taxiService/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer

class DriverAreaConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.area = self.scope['url_route']['kwargs']['area'].lower()
        self.group_name = f"drivers_area_{self.area}"

        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    # Receive message from group
    async def driver_update(self, event):
        await self.send(text_data=json.dumps(event["payload"]))


class RideSearchConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.search_id = self.scope["url_route"]["kwargs"]["search_id"]
        self.group_name = f"ride_search_{self.search_id}"

        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    async def driver_update(self, event):
        await self.send(text_data=json.dumps(event["payload"]))
