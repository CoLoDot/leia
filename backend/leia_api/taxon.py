#!/usr/bin/python3
"""Taxon class"""
from leia_api.models import Taxon as taxon_model
from leia_api.helpers.wikidata import get_taxa
from leia_api.helpers.gbif import get_gbif_taxonomy, get_gbif_distributions


class Taxon:
    """Taxon Class"""

    def __init__(self):
        self.wiki_data = {
            'page_id': '',
            'vernacular_name': '',
            'name': '',
            'picture': ''
        }
        self.taxonomy = {
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
        self.distribution = {
            'locality': ''
        }

    def clear_data(self):
        """clear_data method to clean dicts"""
        self.wiki_data.update({}.fromkeys(self.wiki_data, ''))
        self.taxonomy.update({}.fromkeys(self.taxonomy, ''))
        self.distribution.update({}.fromkeys(self.distribution, ''))

    def retrieve_wiki_data(self, taxon: dict):
        """retrieve_wiki_data method takes taxon's dict as args"""
        try:
            self.wiki_data['page_id'] = taxon['esp_ce__teinte']
        except KeyError:
            pass

        try:
            self.wiki_data['vernacular_name'] = taxon['nom_vernaculaire']
        except KeyError:
            pass

        try:
            self.wiki_data['name'] = taxon['nom_scientifique_du_taxon']
        except KeyError:
            pass

        try:
            self.wiki_data['picture'] = taxon['image']
        except KeyError:
            pass

    def retrieve_gbif_taxonomy(self, name, gbif_response=get_gbif_taxonomy):
        """retrieve_gbif_taxonomy method takes taxon's name str and gbif_response's array"""
        taxonomy_results = gbif_response(name)
        for row in taxonomy_results:
            try:
                self.taxonomy['gbif_key'] = row['key']
            except KeyError:
                pass

            try:
                self.taxonomy['scientific_name'] = row['scientificName']
            except KeyError:
                pass

            try:
                self.taxonomy['kingdom'] = row['kingdom']
            except KeyError:
                pass

            try:
                self.taxonomy['phylum'] = row['phylum']
            except KeyError:
                pass

            try:
                self.taxonomy['order'] = row['order']
            except KeyError:
                pass

            try:
                self.taxonomy['family'] = row['family']
            except KeyError:
                pass

            try:
                self.taxonomy['genus'] = row['genus']
            except KeyError:
                pass

            try:
                self.taxonomy['species'] = row['species']
            except KeyError:
                pass

            try:
                self.taxonomy['taxon_class'] = row['class']
            except KeyError:
                pass

    def retrieve_gbif_distributions(self, key, gbif_response=get_gbif_distributions):
        """retrieve_gbif_distributions method takes key str and gbif_response's array"""
        distribution_results = gbif_response(key)
        if len(distribution_results['results']) >= 1:
            distibution_item = []
            for distribution in distribution_results['results']:
                try:
                    if not distribution['locality'] in distibution_item:
                        distibution_item.append(distribution['locality'])
                except KeyError:
                    pass
            self.distribution['locality'] = ", ".join(distibution_item)

    def insert_taxa(self, taxa=get_taxa):
        """insert_taxa takes taxa's array"""
        taxa_array = taxa()
        for taxon in taxa_array:
            if not taxon_model.objects.filter(
                    page_id__icontains=taxon['esp_ce__teinte']):

                self.retrieve_wiki_data(taxon)
                self.retrieve_gbif_taxonomy(self.wiki_data.get('name'))

                if self.taxonomy.get('gbif_key'):
                    self.retrieve_gbif_distributions(
                        self.taxonomy.get('gbif_key'))

                    taxon_model.objects.create(
                        page_id=self.wiki_data.get('page_id'),
                        gbif_key=self.taxonomy.get('gbif_key'),
                        name=self.wiki_data.get('name'),
                        vernacular_name=self.wiki_data.get('vernacular_name'),
                        scientific_name=self.taxonomy.get('scientific_name'),
                        picture=self.wiki_data.get('picture'),
                        kingdom=self.taxonomy.get('kingdom'),
                        phylum=self.taxonomy.get('phylum'),
                        order=self.taxonomy.get('order'),
                        family=self.taxonomy.get('family'),
                        genus=self.taxonomy.get('genus'),
                        species=self.taxonomy.get('species'),
                        taxon_class=self.taxonomy.get('taxon_class'),
                        distribution=self.distribution.get('locality')
                    )
                self.clear_data()
