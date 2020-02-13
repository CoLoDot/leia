from django.test import TestCase
from leia.models import Leia


# Create your tests here.
class LeiaTestCase(TestCase):

    def setUp(self):
        Leia.objects.create(
            name='Leia Organa',
            email='princess.organa@mail.com',
            message='Princess Leia welcomes you to python test')

    def test_row_exists(self):
        leia_row = Leia.objects.get(name='Leia Organa')
        self.assertEqual(leia_row.name, 'Leia Organa')
        self.assertEqual(leia_row.email, 'princess.organa@mail.com')
        self.assertEqual(leia_row.message, 'Princess Leia welcomes you' \
                                           ' to python test')

    def test_insert_row(self):
        leia_model_total_rows = len(Leia.objects.all())
        Leia.objects.create(
            name='Skywalker Luke',
            email='skywalker@mail.com',
            message='i am not your son !')
        self.assertEqual(len(Leia.objects.all()), leia_model_total_rows + 1)
