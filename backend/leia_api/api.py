# !/usr/bin/python3
"""Api viewSet"""
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from leia_api.taxon import Taxon
from .serializers import TaxonSerializer
from .models import Taxon as taxon_model


class TaxonViewSet(viewsets.ModelViewSet):
    """Taxon viewSet"""
    queryset = taxon_model.objects.all()
    serializer_class = TaxonSerializer

    @action(detail=False)
    def update_taxa(self, request):
        """update_model_Taxon"""
        Taxon().insert_taxa()
        return Response({'status': 'Taxon model updated'})
