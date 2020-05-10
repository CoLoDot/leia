#!/usr/bin/python3
import requests
from leia_api.constants import GBIF_API_SUGGEST_URL, GBIF_API_DISTRIBUTIONS_PREFIX_URL, GBIF_API_DISTRIBUTIONS_SUFFIX_URL


def get_gbif_taxonomy(name: str):
    payload = {'q': name, 'limit': 1}
    gbif_request = requests.get(url=GBIF_API_SUGGEST_URL, params=payload)
    gbif_response = gbif_request.json()
    return gbif_response


def get_gbif_distributions(key: str):
    gbif_request = requests.get(
        url=GBIF_API_DISTRIBUTIONS_PREFIX_URL + str(key) + GBIF_API_DISTRIBUTIONS_SUFFIX_URL)
    gbif_response = gbif_request.json()
    return gbif_response
