from django.db import models

class Taxon(models.Model):
    page_id = models.CharField(max_length=100, default='')
    gbif_key = models.CharField(max_length=100, default='')
    name = models.CharField(max_length=100, default='')
    scientific_name = models.CharField(max_length=100, default='')
    endemic_of = models.CharField(max_length=100, default='')
    picture = models.CharField(max_length=100, default='')
    picture_src = models.CharField(max_length=200, default='')
    picture_description = models.CharField(max_length=1000, default='')
    kingdom = models.CharField(max_length=100, default='')
    phylum = models.CharField(max_length=100, default='')
    order = models.CharField(max_length=100, default='')
    family = models.CharField(max_length=100, default='')
    genus = models.CharField(max_length=100, default='')
    species = models.CharField(max_length=100, default='')
    taxon_class = models.CharField(max_length=100, default='')
    distribution = models.CharField(max_length=300, default='')
