"""Taxon model test case"""
from django.test import TestCase
from leia_api.models import Taxon


class TaxonTestCase(TestCase):
    """Taxon model test case"""

    def setUp(self):
        Taxon.objects.create(
            page_id='http://wikidata.blaba',
            gbif_key='12345678',
            name='Taxon name',
            scientific_name='Taxon scientifc name',
            picture='picture',
            kingdom='kingdom',
            phylum='phylum',
            order='order',
            family='family',
            genus='genus',
            species='species',
            taxon_class='taxon_class',
            distribution='distribution, distribution2')

    def test_row_exists(self):
        """test_row_exists method"""

        taxon_row = Taxon.objects.get(name='Taxon name')
        self.assertEqual(taxon_row.name, 'Taxon name')

    def test_insert_row(self):
        """test_insert_row method"""
        taxon_model_total_rows = len(Taxon.objects.all())
        Taxon.objects.create(
            page_id='http://wikidata.blaba',
            gbif_key='12345678',
            name='Taxon name 2',
            scientific_name='Taxon scientifc name',
            picture='picture',
            kingdom='kingdom',
            phylum='phylum',
            order='order',
            family='family',
            genus='genus',
            species='species',
            taxon_class='taxon_class',
            distribution='distribution, distribution2')
        self.assertEqual(len(Taxon.objects.all()), taxon_model_total_rows + 1)

    def test_delete_row(self):
        """test_delete_row method"""
        taxon_model_total_rows = len(Taxon.objects.all())
        row = Taxon.objects.get(name='Taxon name')
        row.delete()
        self.assertEqual(len(Taxon.objects.all()), taxon_model_total_rows - 1)
