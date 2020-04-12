from django.urls import path, include

urlpatterns = [
    path('', include('leia_ui.urls')),
    path('', include('leia.urls')),
    path('', include('leia_accounts.urls'))
]
