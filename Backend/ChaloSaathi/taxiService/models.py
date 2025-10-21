from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db import models



class Login(models.Model):
    username = models.CharField(
        max_length=100,
        db_index=True,
        null=True,
        blank=True
    )
    email = models.EmailField(
        max_length=255,
        db_index=True,
        null=True,
        blank=True,
        unique=True  # ✅ prevent duplicates
    )
    password = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )  # ✅ optional for Google users

    google_id = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        unique=True
    )  # ✅ store Google user ID

    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = "login"
        indexes = [
            models.Index(fields=["username"]),
            models.Index(fields=["email"]),
            models.Index(fields=["google_id"]),
        ]

    def __str__(self):
        return self.username or self.email or "Unknown User"

# class Login(models.Model):
#     username = models.CharField(
#         max_length=100,
#         db_index=True,
#         null=True,
#         blank=True
#     )  # indexed in Postgres

#     email = models.EmailField(
#         max_length=255,
#         null=True,
#         blank=True
#     )  # ✅ since you're sending email from frontend

#     password = models.CharField(
#         max_length=100
#     )  # ⚠️ for real apps, use Django auth or hashing

#     timestamp = models.DateTimeField(
#         default=timezone.now
#     )  # similar to auto_now_add

#     class Meta:
#         db_table = "login"  # ensure PostgreSQL table name
#         indexes = [
#             models.Index(fields=["username"]),
#             models.Index(fields=["email"]),  # ✅ optional but useful
#         ]

#     def __str__(self):
#         return self.username if self.username else "No Username"


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"
    

class Customer(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True, db_index=True)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128)  # ⚠️ Use hashing if needed
    area = models.CharField(max_length=100)
    aadhar = models.CharField(max_length=20, unique=True)
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = "customer"

    def __str__(self):
        return self.full_name


class Driver(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True, db_index=True)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128)
    area = models.CharField(max_length=100)
    aadhar = models.CharField(max_length=20, unique=True, null=True, blank=True)
    license_number = models.CharField(max_length=50, unique=True, null=True, blank=True)
    vehicle_number = models.CharField(max_length=50, unique=True , null=True, blank=True)
    vehicle_type = models.CharField(max_length=50, null=True, blank=True)
    taxi_photo = models.ImageField(upload_to="taxis/", null=True, blank=True)
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        db_table = "driver"

    def __str__(self):
        return self.full_name
