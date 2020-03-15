from django.test import TestCase
from leia.models import Taxon

# Create your tests here.


class TaxonTestCase(TestCase):

    def setUp(self):
        Taxon.objects.create(
            taxon_name='Dodo',
            taxon_endemic_to='Mauritius Island',
            taxon_extinction_date='1662',
            taxon_common_category='Raphus cucullatus')

    def test_row_exists(self):
        taxon_row = Taxon.objects.get(taxon_name='Dodo')
        self.assertEqual(taxon_row.taxon_name, 'Dodo')
        self.assertEqual(taxon_row.taxon_endemic_to, 'Mauritius Island')
        self.assertEqual(taxon_row.taxon_extinction_date, '1662')
        self.assertEqual(taxon_row.taxon_common_category, 'Raphus cucullatus')

    def test_insert_row(self):
        taxon_model_total_rows = len(Taxon.objects.all())
        Taxon.objects.create(
            taxon_name='Ibis de la Réunion',
            taxon_endemic_to='La réunion',
            taxon_extinction_date='000',
            taxon_common_category='Blabla')
        self.assertEqual(len(Taxon.objects.all()), taxon_model_total_rows + 1)

    def test_delete_row(self):
        taxon_model_total_rows = len(Taxon.objects.all())
        row = Taxon.objects.get(taxon_name='Dodo')
        row.delete()
        self.assertEqual(len(Taxon.objects.all()), taxon_model_total_rows - 1)
