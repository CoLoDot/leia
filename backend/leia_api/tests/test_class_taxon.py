"""Taxon class tests"""
import logging
from django.test import TestCase
from leia_api.models import Taxon as taxon_model
from leia_api.taxon import Taxon
from .helpers.dummies import WIKIDATA_MOCK_INPUT, dummy_taxonomy, dummy_taxa, dummy_distributions


class TaxonTestCase(TestCase):
    """Taxon test case class"""

    def setUp(self):
        self.taxon = Taxon()

    def test_taxon_attrs(self):
        """test_taxon_attrs method"""
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

    def test_clear_data(self):
        """test_clear_data method"""

        instance = Taxon()
        instance.wiki_data = {
            'page_id': 'bla',
            'vernacular_name': 'bla',
            'name': 'bla',
            'picture': 'bla'
        }
        instance.taxonomy = {
            'gbif_key': 'bla',
            'scientific_name': 'bla',
            'kingdom': 'bla',
            'phylum': 'bla',
            'order': 'bla',
            'family': 'bla',
            'genus': 'bla',
            'species': 'bla',
            'taxon_class': 'bla'}
        instance.distribution = {
            'locality': 'bla'
        }

        assert instance.distribution.get('locality') == 'bla'
        assert instance.taxonomy.get('gbif_key') == 'bla'
        assert instance.wiki_data.get('page_id') == 'bla'

        instance.clear_data()

        assert instance.distribution == self.taxon.distribution
        assert instance.taxonomy == self.taxon.taxonomy
        assert instance.wiki_data == self.taxon.wiki_data

    def test_retrieve_wiki_data(self):
        """test_retrieve_wiki_data method"""

        taxon = Taxon()
        taxon.retrieve_wiki_data(taxon=WIKIDATA_MOCK_INPUT)
        assert taxon.wiki_data == {
            'page_id': 'esp_ce__teinte',
            'vernacular_name': 'nom_vernaculaire',
            'name': 'nom_scientifique_du_taxon',
            'picture': 'image'
        }

    def test_retrieve_wiki_data_is_empty(self):
        """test_retrieve_wiki_data_is_empty method"""
        taxon = Taxon()
        taxon.retrieve_wiki_data(taxon={})
        assert taxon.wiki_data == {
            'page_id': '',
            'vernacular_name': '',
            'name': '',
            'picture': ''
        }

    def test_retrieve_gbif_taxonomy(self):
        """test_retrieve_gbif_taxonomy method"""

        instance = Taxon()
        instance.retrieve_gbif_taxonomy(
            name='name', gbif_response=dummy_taxonomy)
        assert instance.taxonomy == {
            'gbif_key': '1',
            'scientific_name': 'scientificName',
            'kingdom': 'kingdom',
            'phylum': 'phylum',
            'order': 'order',
            'family': 'family',
            'genus': 'genus',
            'species': 'species',
            'taxon_class': ''
        }

    def test_retrieve_gbif_taxonomy_is_empty(self):
        """test_retrieve_gbif_taxonomy_is_empty method"""

        instance = Taxon()

        def dummy(name):
            logging.debug(name)
            return [{}]

        instance.retrieve_gbif_taxonomy(name='name', gbif_response=dummy)
        assert instance.taxonomy == {
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

    def test_retrieve_gbif_distributions(self):
        """test_retrieve_gbif_distributions method"""

        instance = Taxon()
        instance.retrieve_gbif_distributions(
            key='fakeKey', gbif_response=dummy_distributions)
        assert instance.distribution == {'locality': 'Vulcain'}

    def test_retrieve_gbif_distributions_is_empty(self):
        """test_retrieve_gbif_distributions_is_empty method"""

        instance = Taxon()

        def dummy(key):
            logging.debug(key)
            return {'results': [{'locality': ''}]}

        instance.retrieve_gbif_distributions(
            key='fakeKey', gbif_response=dummy)
        assert instance.distribution == {'locality': ''}

    def test_retrieve_gbif_distributions_missing_key(self):
        """test_retrieve_gbif_distributions_is_empty method"""

        instance = Taxon()

        def dummy(key):
            logging.debug(key)
            return {'results': [{'wrong_key': ''}]}

        instance.retrieve_gbif_distributions(
            key='fakeKey', gbif_response=dummy)
        assert instance.distribution == {'locality': ''}

    def test_insert_taxa(self):
        """test_insert_taxa method"""

        instance = Taxon()
        get_length_before = len(taxon_model.objects.all())

        instance.retrieve_wiki_data(taxon=WIKIDATA_MOCK_INPUT)
        instance.retrieve_gbif_taxonomy(
            name='name', gbif_response=dummy_taxonomy)
        instance.retrieve_gbif_distributions(
            key='key', gbif_response=dummy_distributions)
        instance.insert_taxa(taxa=dummy_taxa)

        get_length_after = len(taxon_model.objects.all())

        assert get_length_before == 0
        assert get_length_after == 1
        assert get_length_before < get_length_after
