from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer
from django.core.mail import send_mail
from .models import Contact
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
@api_view(["GET","POST"])
def save_login(request):
    # for GET requests
    if request.method == "GET":
        return Response({"message": "Login endpoint is working"}, status=200)


    # for POST requests
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Login data saved successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(["GET", "POST"])
def contact_view(request):
    # for Get logic
    if request.method == "GET":
        # Optional: just return a simple message for testing
        return Response({"message": "Contact endpoint is working"}, status=status.HTTP_200_OK)

    # for POST logic 
    name = request.data.get("name")
    email = request.data.get("email")
    message = request.data.get("message")

    if not name or not email or not message:
        return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    # Save to database
    contact = Contact.objects.create(name=name, email=email, message=message)

    # Send email
    send_mail(
        subject=f"New Contact from {name}",
        message=message,
        from_email=email,
        recipient_list=["vermaajay6799013@gmail.com"],  # ✅ your email
        fail_silently=False,
    )

    return Response({"success": "Message sent successfully!"}, status=status.HTTP_201_CREATED)


# @csrf_exempt
# @api_view(["GET", "POST"])
# def google_login(request):
#     if request.method == "GET":
#         # Simple test message for GET requests
#         return Response({"message": "Google login endpoint is working"}, status=status.HTTP_200_OK)

#     # POST request logic
#     token = request.data.get("token")
#     email = request.data.get("email")
#     name = request.data.get("name")

#     if not token or not email or not name:
#         return Response({"error": "Token, email, and name are required"}, status=status.HTTP_400_BAD_REQUEST)

#     # Optionally: save Google login info in your Login model
#     # Login.objects.create(username=email, password="")  # password can be blank or random

#     # TODO: Validate token with Google API for production

#     return Response({"success": True, "email": email, "name": name}, status=status.HTTP_201_CREATED)
