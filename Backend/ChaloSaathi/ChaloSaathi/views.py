from django.http import JsonResponse


def home(request):
    return 

def hello_world(request):
    return JsonResponse({"message": "Hello Django API 👋"})
