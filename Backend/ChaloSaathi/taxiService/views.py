from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer,CustomerSerializer,DriverSerializer
from django.core.mail import send_mail
from .models import Contact, Login,Customer,Driver
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q 


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Login
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt

from django.db.models import Q
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Customer, Driver
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@api_view(["POST"])
def save_login(request):
    username_or_email = request.data.get("username")  # frontend can send email
    password = request.data.get("password")

    if not username_or_email or not password:
        return Response(
            {"success": False, "message": "Username/email and password required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Check in Customer table
    customer = Customer.objects.filter(
        Q(email=username_or_email) | Q(full_name=username_or_email),
        password=password
    ).first()
    if customer:
        return Response(
            {
                "success": True,
                "message": "Customer login successful",
                "username": customer.full_name,
                "email": customer.email,
                "role": "customer"
            },
            status=status.HTTP_200_OK
        )

    # Check in Driver table
    driver = Driver.objects.filter(
        Q(email=username_or_email) | Q(full_name=username_or_email),
        password=password
    ).first()
    if driver:
        return Response(
            {
                "success": True,
                "message": "Driver login successful",
                "username": driver.full_name,
                "email": driver.email,
                "role": "driver"
            },
            status=status.HTTP_200_OK
        )

    # If not found
    return Response(
        {"success": False, "message": "Invalid credentials or user not registered"},
        status=status.HTTP_401_UNAUTHORIZED
    )




@csrf_exempt
@api_view(["GET", "POST"])
def contact_view(request):
    if request.method == "GET":
        return Response({"message": "Contact endpoint is working"}, status=status.HTTP_200_OK)

    name = request.data.get("name")
    email = request.data.get("email")
    message = request.data.get("message")

    if not name or not email or not message:
        return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    contact = Contact.objects.create(name=name, email=email, message=message)

    send_mail(
        subject=f"New Contact from {name}",
        message=message,
        from_email=email,
        recipient_list=["vermaajay6799013@gmail.com"],
        fail_silently=False,
    )

    return Response({"success": "Message sent successfully!"}, status=status.HTTP_201_CREATED)


# ✅ Customer Registration
@csrf_exempt
@api_view(["GET","POST"])
def customer_register(request):
    if request.method == "GET":
        return Response({"message": "customer endpoint is working"}, status=status.HTTP_200_OK)
    serializer = CustomerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": True, "message": "Customer registered successfully"}, status=status.HTTP_201_CREATED)
    return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


# ✅ Driver Registration
@csrf_exempt
@api_view(["GET","POST"])
def driver_register(request):
    if request.method == "GET":
        return Response({"message": "Driver endpoint is working"}, status=status.HTTP_200_OK)
    serializer = DriverSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": True, "message": "Driver registered successfully"}, status=status.HTTP_201_CREATED)
    return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def available_drivers(request):
    area = request.GET.get("area", "").lower()
    if not area:
        return Response({"drivers": []}, status=200)

    # Filter drivers by area (case-insensitive)
    drivers = Drivers.objects.filter(area__icontains=area, status="available")  # status field optional
    serializer = DriverSerializer(drivers, many=True)
    return Response({"drivers": serializer.data}, status=200)

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from .models import Login
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

GOOGLE_CLIENT_ID = "916481483985-uam47pjqe5glagrm8lo7lfuio82snbif.apps.googleusercontent.com"  # replace this

@csrf_exempt
@api_view(["POST"])
def google_login(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body.decode("utf-8"))
            token = body.get("credential")

            if not token:
                return JsonResponse({"success": False, "message": "No token provided"}, status=400)

            # ✅ Verify token
            idinfo = id_token.verify_oauth2_token(
                token,
                google_requests.Request(),
                GOOGLE_CLIENT_ID
            )

            email = idinfo.get("email")
            name = idinfo.get("name", "")
            google_id = idinfo.get("sub")

            # ✅ Create or get user
            user, created = Login.objects.get_or_create(
                email=email,
                defaults={
                    "username": name,
                    "password": "",
                }
            )

            return JsonResponse({
                "success": True,
                "username": user.username,
                "email": user.email,
            })

        except Exception as e:
            return JsonResponse({"success": False, "message": str(e)}, status=500)

    return JsonResponse({"success": False, "message": "Invalid request"}, status=405)

