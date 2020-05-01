# !/usr/bin/python3
"""Api viewSet"""
from rest_framework import viewsets
from .serializers import TaxonSerializer
from .models import Taxon
from .cron import update_model_Taxon

class TaxonViewSet(viewsets.ModelViewSet):
    """Taxon viewSet"""
    queryset = Taxon.objects.all()
    serializer_class = TaxonSerializer

