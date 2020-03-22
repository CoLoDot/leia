from django.test import TestCase
from leia.models import Taxon


class TaxonTestCase(TestCase):

    def setUp(self):
        Taxon.objects.create(
            page_id='1234568',
            category='cat',
            common_name='Dodo',
            binomial_name='Dodo',
            order='order',
            extinction_date='Raphus cucullatus',
            former_range='map',
            picture='picture')

    def test_row_exists(self):
        taxon_row = Taxon.objects.get(common_name='Dodo')
        self.assertEqual(taxon_row.common_name, 'Dodo')

    def test_insert_row(self):
        taxon_model_total_rows = len(Taxon.objects.all())
        Taxon.objects.create(
            page_id='1234568',
            category='cat',
            common_name='Ibis',
            binomial_name='Ibis',
            order='order',
            extinction_date='Raphus cucullatus',
            former_range='map',
            picture='picture')
        self.assertEqual(len(Taxon.objects.all()), taxon_model_total_rows + 1)

    def test_delete_row(self):
        taxon_model_total_rows = len(Taxon.objects.all())
        row = Taxon.objects.get(common_name='Dodo')
        row.delete()
        self.assertEqual(len(Taxon.objects.all()), taxon_model_total_rows - 1)
