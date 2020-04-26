from rest_framework import serializers
from leia_api.models import Taxon

class TaxonSerializer(serializers.ModelSerializer):
    wikidataPageID = serializers.CharField(source='page_id')
    gbifKey = serializers.CharField(source='gbif_key')
    vernacularName = serializers.CharField(source='vernacular_name')
    scientificName = serializers.CharField(source='scientific_name')
    taxonClass = serializers.CharField(source='taxon_class')

    class Meta:
        model = Taxon
        fields = ('id', 'wikidataPageID', 'gbifKey', 'name', 'vernacularName', 'scientificName', 'picture', 'kingdom', 'phylum', 'order', 'family', 'genus', 'species', 'taxonClass', 'distribution')
