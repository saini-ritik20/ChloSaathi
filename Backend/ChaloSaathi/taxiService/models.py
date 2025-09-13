from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# class Profile(models.Model):
#     USER_TYPE_CHOICES = (
#         ('driver', 'Driver'),
#         ('customer', 'Customer'),
#     )
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)

#     def __str__(self):
#         return f"{self.user.username} - {self.user_type}"


# class Driver(models.Model):
#     profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
#     name = models.CharField(max_length=100, null=False)
#     email = models.EmailField(max_length=100, null=False, unique=True)
#     phone_no = models.CharField(max_length=15, null=False)
#     area = models.CharField(max_length=100, null=False)

#     def __str__(self):
#         return self.name


# class Customer(models.Model):
#     profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
#     name = models.CharField(max_length=100, null=False)
#     email = models.EmailField(max_length=100, null=False, unique=True)
#     phone_no = models.CharField(max_length=15, null=False)
#     area = models.CharField(max_length=100, null=False)

#     def __str__(self):
#         return self.name


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
