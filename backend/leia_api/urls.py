from rest_framework import routers
from .api import TaxonViewSet

router = routers.DefaultRouter()
router.register('api/taxa', TaxonViewSet, 'taxon')
urlpatterns = router.urls
