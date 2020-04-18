from django.db import models

class Taxon(models.Model):
    page_id = models.CharField(max_length=1000, default='')
    binomial_name = models.CharField(max_length=100, default='')
    common_name = models.CharField(max_length=100, default='')
    taxon_superior = models.CharField(max_length=100, default='')
    taxonomic_rank = models.CharField(max_length=100, default='')
    endemic_of = models.CharField(max_length=100, default='')
    cites_id = models.CharField(max_length=100, default='')
    picture = models.CharField(max_length=1000, default='')
