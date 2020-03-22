#!/usr/bin/python3
from rest_framework import viewsets, permissions
from .serializers import LeiaSerializer, TaxonSerializer
from .models import Taxon
from .wikidata import update_model_Taxon


class LeiaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeiaSerializer

    def get_queryset(self):
        return self.request.user.leia.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TaxonViewSet(viewsets.ModelViewSet):
    queryset = Taxon.objects.all()
    serializer_class = TaxonSerializer

    def get_queryset(self):
        update_model_Taxon()
        queryset = super().get_queryset()
        return queryset
