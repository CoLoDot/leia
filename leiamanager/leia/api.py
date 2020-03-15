# from leia.models import Leia
from rest_framework import viewsets, permissions
from .serializers import LeiaSerializer, TaxonSerializer
from .models import Taxon


# Leia ViewSet
class LeiaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeiaSerializer

    def get_queryset(self):
        return self.request.user.leia.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# TaxonViewSet
class TaxonViewSet(viewsets.ModelViewSet):
    queryset = Taxon.objects.all()
    serializer_class = TaxonSerializer

# https://en.wikipedia.org/wiki/Category:IUCN_Red_List_extinct_species
