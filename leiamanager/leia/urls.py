from rest_framework import routers
from .api import LeiaViewSet

router = routers.DefaultRouter()
router.register('api/leia', LeiaViewSet, 'leia')

urlpatterns = router.urls
