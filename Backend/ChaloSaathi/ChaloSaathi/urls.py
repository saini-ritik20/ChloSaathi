"""
URL configuration for ChaloSaathi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from taxiService.views import save_login, contact_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/hello/", views.hello),
    path("api/save-login/", save_login, name="save_login"),
    path("api/contact/", contact_view, name="contact_view"),
]

