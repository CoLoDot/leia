"""leia_backend URL Configuration"""
from django.urls import path, include, re_path
from django.views.generic import TemplateView

def trigger_error(request):
    division_by_zero = 1 / 0

urlpatterns = [
    path('', include('leia_api.urls')),
    path('sentry-debug/', trigger_error),
    re_path(".*", TemplateView.as_view(template_name="index.html")),
]
