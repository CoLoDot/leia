# from leia.models import Leia
from rest_framework import viewsets, permissions
from .serializers import LeiaSerializer, TaxonSerializer
from .models import Taxon
from .wikidata import update_model_Taxon

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

    def get_queryset(self):
        update_model_Taxon()
        queryset = super().get_queryset()
        return queryset

# https://en.wikipedia.org/wiki/Category:IUCN_Red_List_extinct_species
