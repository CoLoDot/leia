from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Leia(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leia", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Taxon(models.Model):
    taxon_name = models.CharField(max_length=100)
    taxon_endemic_to = models.CharField(max_length=200)
    taxon_extinction_date = models.CharField(max_length=100)
    taxon_common_category = models.CharField(max_length=100)
    taxon_image = models.URLField(default=None)
