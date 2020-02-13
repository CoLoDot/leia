from rest_framework import serializers
from leia.models import Leia


# Leia Serializer
class LeiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leia
        fields = '__all__'
