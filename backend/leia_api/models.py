from django.db import models

class Taxon(models.Model):
    page_id = models.CharField(max_length=100, default='')
    gbif_key = models.CharField(max_length=100, default='')
    name = models.CharField(max_length=100, default='')
    vernacular_name = models.CharField(max_length=100, default='')
    scientific_name = models.CharField(max_length=100, default='')
    picture = models.CharField(max_length=2000, default='')
    kingdom = models.CharField(max_length=100, default='')
    phylum = models.CharField(max_length=100, default='')
    order = models.CharField(max_length=100, default='')
    family = models.CharField(max_length=100, default='')
    genus = models.CharField(max_length=100, default='')
    species = models.CharField(max_length=100, default='')
    taxon_class = models.CharField(max_length=100, default='')
    distribution = models.CharField(max_length=300, default='')
