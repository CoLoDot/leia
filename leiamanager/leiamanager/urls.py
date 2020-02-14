from django.urls import path, include

urlpatterns = [
    path('', include('leia_ui.urls')),
    path('', include('leia.urls')),
]
