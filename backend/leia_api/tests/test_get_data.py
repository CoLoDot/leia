import json
from django.test import TestCase
from leia_api.taxon import Taxon
from leia_api.constants import URL, USER_AGENT, WIKIDATA_QUERY, GBIF_API_SUGGEST_URL, GBIF_API_DISTRIBUTIONS_PREFIX_URL, GBIF_API_DISTRIBUTIONS_SUFFIX_URL


class TaxonTestCase(TestCase):

    def setUp(self):
        self.taxon = Taxon()

    def test_taxon_attrs(self):
        assert self.taxon.endpoint_url == URL
        assert self.taxon.user_agent == USER_AGENT
        assert self.taxon.query == WIKIDATA_QUERY
        assert self.taxon.wikidata_results == {}
        assert self.taxon.taxa == []
        assert self.taxon.wiki_data == {
            'page_id': '',
            'vernacular_name': '',
            'name': '',
            'picture': ''
        }
        assert self.taxon.taxonomy == {
            'gbif_key': '',
            'scientific_name': '',
            'kingdom': '',
            'phylum': '',
            'order': '',
            'family': '',
            'genus': '',
            'species': '',
            'taxon_class': ''
        }
        assert self.taxon.distribution == {
            'locality': ''
        }

    def test_retrieve_wiki_data(self):
        taxon = Taxon()
        mock_input = {
            'esp_ce__teinte': 'esp_ce__teinte', 
            'nom_vernaculaire': 'nom_vernaculaire',
            'nom_scientifique_du_taxon': 'nom_scientifique_du_taxon', 
            "image": "image"}
        taxon.retrieve_wiki_data(taxon=mock_input)
        assert taxon.wiki_data == {
            'page_id': 'esp_ce__teinte',
            'vernacular_name': 'nom_vernaculaire',
            'name': 'nom_scientifique_du_taxon',
            'picture': 'image'
        }

