from rest_framework import routers
from .api import LeiaViewSet, TaxonViewSet

router = routers.DefaultRouter()
router.register('api/leia', LeiaViewSet, 'leia')
router.register('api/taxon', TaxonViewSet, 'taxon')
urlpatterns = router.urls
