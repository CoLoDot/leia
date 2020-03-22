from django.db import models
from django.contrib.auth.models import User


class Leia(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leia", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Taxon(models.Model):
    page_id = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    common_name = models.CharField(max_length=100)
    binomial_name = models.CharField(max_length=100)
    order = models.CharField(max_length=100)
    extinction_date = models.CharField(max_length=100)
    former_range = models.CharField(max_length=100)
    picture = models.URLField(default=None)
