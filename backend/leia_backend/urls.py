"""leia_backend URL Configuration"""
from django.urls import path, include

urlpatterns = [
    path('', include('leia_api.urls')),
]
