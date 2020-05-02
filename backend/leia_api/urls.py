
from django.urls import path, include
from .api import TaxonViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'taxa', TaxonViewSet)

urlpatterns = [
    path('', include(router.urls)),
]