from rest_framework import routers
from .api import TaxonViewSet

router = routers.DefaultRouter()
router.register('api/taxon', TaxonViewSet, 'taxon')
urlpatterns = router.urls
