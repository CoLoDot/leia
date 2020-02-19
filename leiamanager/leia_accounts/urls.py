from django.urls import path, include
from .api import RegistrationApi, LoginApi, UserApi
from knox import views as k_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/registration', RegistrationApi.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/auth/user', UserApi.as_view()),
    path('api/auth/logout', k_views.LogoutView.as_view(), name='knox_logout')
]
