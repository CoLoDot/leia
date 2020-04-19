#!/usr/bin/python3
from .taxon import Taxon


def update_model_Taxon():
    taxon = Taxon()
    taxon.get_sparql_wikidata()
    taxon.get_taxa()
    taxon.insert_taxa()
