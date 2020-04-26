#!/usr/bin/python3
import requests
from SPARQLWrapper import SPARQLWrapper, JSON
from .constants import URL, USER_AGENT, WIKIDATA_QUERY, GBIF_API_SUGGEST_URL, GBIF_API_DISTRIBUTIONS_PREFIX_URL, GBIF_API_DISTRIBUTIONS_SUFFIX_URL
from leia_api.models import Taxon as taxon_model

class Taxon:

    def __init__(self):
        self.endpoint_url = URL
        self.user_agent = USER_AGENT
        self.query = WIKIDATA_QUERY
        self.wikidata_results = {}
        self.taxa = []
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

    def get_sparql_wikidata(self):
        sparql = SPARQLWrapper(self.endpoint_url, agent=self.user_agent)
        sparql.setQuery(self.query)
        sparql.setReturnFormat(JSON)
        self.wikidata_results = sparql.query().convert()

    def get_taxa(self):
        for result in self.wikidata_results["results"]["bindings"]:
            taxon_data_to_get = {}
            get_result_keys = result.keys()
            for key in get_result_keys:
                taxon_data_to_get[key] = result[key].get('value')
            self.taxa.append(taxon_data_to_get)

    def retrieve_wiki_data(self, taxon: dict):
        try:self.wiki_data['page_id'] = taxon['esp_ce__teinte']
        except KeyError:pass

        try:self.wiki_data['vernacular_name'] = taxon['nom_vernaculaire']
        except KeyError:pass

        try:self.wiki_data['name'] = taxon['nom_scientifique_du_taxon']
        except KeyError:pass

        try:self.wiki_data['picture'] = taxon['image']
        except KeyError:pass

    def get_gbif_taxonomy(self, name: str):
        payload = {'q': name, 'limit': 1}
        gbif_request = requests.get(url=GBIF_API_SUGGEST_URL, params=payload)
        gbif_response = gbif_request.json()
        
        for row in gbif_response:
            try:self.taxonomy['gbif_key'] = row['key']
            except KeyError:pass

            try:self.taxonomy['scientific_name'] = row['scientificName']
            except KeyError:pass

            try:self.taxonomy['kingdom'] = row['kingdom']
            except KeyError:pass

            try:self.taxonomy['phylum'] = row['phylum']
            except KeyError:pass

            try:self.taxonomy['order'] = row['order']
            except KeyError:pass

            try:self.taxonomy['family'] = row['family']
            except KeyError:pass
            
            try:self.taxonomy['genus'] = row['genus']
            except KeyError:pass
            
            try:self.taxonomy['species'] = row['species']
            except KeyError:pass
            
            try:self.taxonomy['taxon_class'] = row['class']
            except KeyError:pass

    def get_gbif_distributions(self, key: str):
        gbif_request = requests.get(url=GBIF_API_DISTRIBUTIONS_PREFIX_URL + str(key) + GBIF_API_DISTRIBUTIONS_SUFFIX_URL)
        gbif_response = gbif_request.json()
        if len(gbif_response['results']) >= 1:
            distibution_item = []
            for distribution in gbif_response['results']:
                try:
                    if not distribution['locality'] in distibution_item:
                        distibution_item.append(distribution['locality'])
                except KeyError:
                    pass
            self.distribution['locality'] = ",".join(distibution_item)

    def insert_taxa(self):
        for taxon in self.taxa:
            if not taxon_model.objects.filter(
                    page_id__icontains=taxon['esp_ce__teinte']):

                self.retrieve_wiki_data(taxon)
                self.get_gbif_taxonomy(self.wiki_data.get('name'))

                if self.taxonomy.get('gbif_key'):
                    self.get_gbif_distributions(self.taxonomy.get('gbif_key'))

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
                
                self.wiki_data.update({}.fromkeys(self.wiki_data, ''))
                self.taxonomy.update({}.fromkeys(self.taxonomy, ''))
                self.distribution.update({}.fromkeys(self.distribution, ''))