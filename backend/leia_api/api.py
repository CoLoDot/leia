# !/usr/bin/python3
"""Api viewSet"""
from rest_framework import viewsets, permissions
from .serializers import TaxonSerializer
from .models import Taxon
from .get_data import update_model_Taxon

class TaxonViewSet(viewsets.ModelViewSet):
    """Taxon viewSet"""
    queryset = Taxon.objects.all()
    serializer_class = TaxonSerializer

    def get_queryset(self):
        update_model_Taxon()
        queryset = super().get_queryset()
        return queryset
