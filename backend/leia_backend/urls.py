"""leia_backend URL Configuration"""
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api/', include('leia_api.urls')),
    re_path(".*", TemplateView.as_view(template_name="index.html")),
]
