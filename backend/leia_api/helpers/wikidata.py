#!/usr/bin/python3
from SPARQLWrapper import SPARQLWrapper, JSON
from leia_api.constants import URL, USER_AGENT, WIKIDATA_QUERY


def get_sparql_wikidata():
    sparql = SPARQLWrapper(URL, agent=USER_AGENT)
    sparql.setQuery(WIKIDATA_QUERY)
    sparql.setReturnFormat(JSON)
    wikidata_results = sparql.query().convert()
    return wikidata_results


def get_taxa():
    wikidata_results = get_sparql_wikidata()
    taxa = []
    for result in wikidata_results["results"]["bindings"]:
        taxon_data_to_get = {}
        get_result_keys = result.keys()
        for key in get_result_keys:
            taxon_data_to_get[key] = result[key].get('value')
        taxa.append(taxon_data_to_get)
    return taxa
