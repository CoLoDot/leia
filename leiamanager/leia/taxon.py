#!/usr/bin/python3
from SPARQLWrapper import SPARQLWrapper, JSON
from .constants import URL, USER_AGENT, WIKIDATA_QUERY
from leia.models import Taxon as taxon_model


class Taxon:

    def __init__(self):
        self.endpoint_url = URL
        self.user_agent = USER_AGENT
        self.query = WIKIDATA_QUERY
        self.wikidata_results = {}
        self.taxon_data = []

    def get_sparql_wikidata(self):
        sparql = SPARQLWrapper(self.endpoint_url, agent=self.user_agent)
        sparql.setQuery(self.query)
        sparql.setReturnFormat(JSON)
        self.wikidata_results = sparql.query().convert()

    def get_taxon_data(self):
        for result in self.wikidata_results["results"]["bindings"]:
            taxon_data_to_get = {}
            get_result_keys = result.keys()
            for key in get_result_keys:
                taxon_data_to_get[key] = result[key].get('value')
            self.taxon_data.append(taxon_data_to_get)

    def insert_taxon_data(self):
        for taxa in self.taxon_data:
            if not taxon_model.objects.filter(
                    page_id__icontains=taxa['esp_ce__teinte']):

                taxa_to_insert = {
                    'page_id': '',
                    'binomial_name': '',
                    'common_name': '',
                    'taxon_superior': '',
                    'taxonomic_rank': '',
                    'endemic_of': '',
                    'picture': ''
                }

                # page_id
                try:
                    taxa_to_insert['page_id'] = taxa['esp_ce__teinte']
                except KeyError:
                    pass

                # common_name
                try:
                    taxa_to_insert['common_name'] = taxa['esp_ce__teinteLabel']
                except KeyError:
                    pass

                # binomial_name
                try:
                    taxa_to_insert['binomial_name'] = taxa['nom_scientifique_du_taxon']
                except KeyError:
                    pass

                # taxon superior
                try:
                    taxa_to_insert['taxon_superior'] = taxa['taxon_sup_rieurLabel']
                except KeyError:
                    pass

                # taxonomic_rank
                try:
                    taxa_to_insert['taxonomic_rank'] = taxa['rang_taxinomiqueLabel']
                except KeyError:
                    pass

                # endemic_of
                try:
                    taxa_to_insert['endemic_of'] = taxa['end_mique_deLabel']
                except KeyError:
                    pass

                # picture
                try:
                    taxa_to_insert['picture'] = taxa['image']
                except KeyError:
                    pass

                taxon_model.objects.create(
                    page_id=taxa_to_insert['page_id'],
                    binomial_name=taxa_to_insert['binomial_name'],
                    common_name=taxa_to_insert['common_name'],
                    taxon_superior=taxa_to_insert['taxon_superior'],
                    taxonomic_rank=taxa_to_insert['taxonomic_rank'],
                    endemic_of=taxa_to_insert['endemic_of'],
                    picture=taxa_to_insert['picture'])
