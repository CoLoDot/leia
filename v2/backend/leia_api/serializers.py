from rest_framework import serializers
from leia_api.models import Taxon

class TaxonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taxon
        fields = '__all__'
