from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    USER_TYPE_CHOICES = (
        ('driver', 'Driver'),
        ('customer', 'Customer'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)

    def __str__(self):
        return f"{self.user.username} - {self.user_type}"


class Driver(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False, unique=True)
    phone_no = models.CharField(max_length=15, null=False)
    area = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name


class Customer(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False, unique=True)
    phone_no = models.CharField(max_length=15, null=False)
    area = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name


class Login(models.Model):
    email = models.EmailField(max_length=100, null=False)
    password = models.CharField(max_length=128, null=False)  # Use 128 for hashed passwords

    def __str__(self):
        return self.email
