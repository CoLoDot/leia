# from leia.models import Leia
from rest_framework import viewsets, permissions
from .serializers import LeiaSerializer


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
