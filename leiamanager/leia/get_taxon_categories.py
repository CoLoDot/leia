#!/usr/bin/python3
import requests
from .constants import URL, CATEGORIES_PARAMS


class TaxonCategories:

    def __init__(self):
        self.taxon_categories = {}
        self.taxon_categories_pages = {}

    def get_taxon_categories(self):
        open_requests_session = requests.Session()
        get_results = open_requests_session.get(
            url=URL, params=CATEGORIES_PARAMS)
        results = get_results.json()
        pages = results['query']['categorymembers']
        self.taxon_categories = {
            page['sortkeyprefix']: page['pageid'] for page in pages}
        return self.taxon_categories

    def get_pages_by_categories(self):
        pass
