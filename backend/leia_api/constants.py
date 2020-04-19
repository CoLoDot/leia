#!/usr/bin/python3
import sys

# Wikipedia api url
URL = "https://query.wikidata.org/sparql"

# Set a user Agent to request Wikidata
USER_AGENT = "Leia/%s.%s" % (
    sys.version_info[0], sys.version_info[1])

# Wikipedia params for requests list of taxon categories
WIKIDATA_QUERY = """SELECT ?esp_ce__teinte ?esp_ce__teinteLabel ?nom_scientifique_du_taxon ?image ?end_mique_deLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
  ?esp_ce__teinte wdt:P141 wd:Q237350.
  OPTIONAL { ?esp_ce__teinte wdt:P225 ?nom_scientifique_du_taxon. }
  OPTIONAL { ?esp_ce__teinte wdt:P18 ?image. }
  OPTIONAL { ?esp_ce__teinte wdt:P183 ?end_mique_de. }
}
"""

# GBIF
GBIF_API_SUGGEST_URL = 'https://api.gbif.org/v1/species/suggest?'
GBIF_API_DISTRIBUTIONS_PREFIX_URL = 'https://api.gbif.org/v1/species/'
GBIF_API_DISTRIBUTIONS_SUFFIX_URL = '/distributions'
GBIF_API_MEDIA_PREFIX_URL = 'https://api.gbif.org/v1/species/species/'
GBIF_API_MEDIA_SUFFIX_URL = '/media?'
