from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db import models

class Login(models.Model):
    username = models.CharField(max_length=100, db_index=True,null=True, blank=True)  # indexed in Postgres
    password = models.CharField(max_length=100)  # ⚠️ use Django's auth for real apps
    timestamp = models.DateTimeField(default=timezone.now)  # similar to auto_now_add

    class Meta:
        db_table = "login"   # ensure PostgreSQL table name
        indexes = [
            models.Index(fields=["username"]),  # explicit Postgres index
        ]

    def __str__(self):
        return self.username


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"