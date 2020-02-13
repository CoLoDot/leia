from leia.models import Leia
from rest_framework import viewsets, permissions
from .serializers import LeiaSerializer


# Leia ViewSet
class LeiaViewSet(viewsets.ModelViewSet):
    queryset = Leia.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeiaSerializer
