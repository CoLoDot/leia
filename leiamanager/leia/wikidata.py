#!/usr/bin/python3
from .get_taxon_categories import Taxon


def update_model_Taxon():
    taxon = Taxon()
    taxon.get_sparql_wikidata()
    taxon.get_taxon_data()
    taxon.insert_taxon_data()
