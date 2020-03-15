from rest_framework import serializers
from leia.models import Leia, Taxon


# Leia Serializer
class LeiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leia
        fields = '__all__'


class TaxonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taxon
        fields = '__all__'
