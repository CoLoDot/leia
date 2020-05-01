"""leia_backend URL Configuration"""
from django.urls import path, include

def trigger_error(request):
    division_by_zero = 1 / 0

urlpatterns = [
    path('', include('leia_api.urls')),
    path('sentry-debug/', trigger_error),
]
