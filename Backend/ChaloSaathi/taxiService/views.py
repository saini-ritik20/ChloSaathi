from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer
from django.core.mail import send_mail
from .models import Contact

@api_view(['POST'])
def save_login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Login data saved successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def contact_view(request):
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
