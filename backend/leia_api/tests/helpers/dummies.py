"""Dummies functions"""
import logging

WIKIDATA_MOCK_INPUT = {
    'esp_ce__teinte': 'esp_ce__teinte',
    'nom_vernaculaire': 'nom_vernaculaire',
    'nom_scientifique_du_taxon': 'nom_scientifique_du_taxon',
    "image": "image"}


def dummy_taxa():
    """Dummy function to return fake taxa array after wikidata api call"""
    return [{
        'esp_ce__teinte': 'http://www.wikidata.org/entity/Q1939955',
        'nom_vernaculaire': 'Harelip Sucker',
        'nom_scientifique_du_taxon': 'Moxostoma lacerum',
        'image': 'http://fakelink',
        'esp_ce__teinteLabel': 'Moxostoma lacerum'}]


def dummy_taxonomy(name):
    """Dummy function to return fake taxonomy given a taxon's name"""
    logging.debug(name)
    return [{
        'key': '1',
        'scientificName': 'scientificName',
        'kingdom': 'kingdom',
        'phylum': 'phylum',
        'order': 'order',
        'family': 'family',
        'genus': 'genus',
        'species': 'species',
        'taxon_class': 'class'
    }]


def dummy_distributions(key):
    """Dummy function to return a fake locality given a gbif key - fake gbif api response"""
    logging.debug(key)
    return {'results': [{'locality': 'Vulcain'}]}
