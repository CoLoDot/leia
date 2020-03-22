#!/usr/bin/python3
from .get_taxon_categories import TaxonCategories


def update_model_Taxon():
    taxon = TaxonCategories()
    taxon.get_taxon_categories()
