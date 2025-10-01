from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer,CustomerSerializer,DriverSerializer
from django.core.mail import send_mail
from .models import Contact, Login
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
@api_view(["GET", "POST"])
def save_login(request):
    if request.method == "GET":
        return Response({"message": "Login endpoint is working"}, status=200)

    # ✅ Extract username & password
    username = request.data.get("username")
    password = request.data.get("password")

    # ✅ Check if both fields exist
    if not username or not password:
        return Response(
            {"success": False, "message": "Username and password required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # ✅ Check if the user exists in the database
    try:
        user = Login.objects.get(username=username, password=password)
        return Response(
            {"success": True, "message": "Login successful"}, 
            status=status.HTTP_200_OK
        )
    except Login.DoesNotExist:
        return Response(
            {"success": False, "message": "Invalid credentials"},
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