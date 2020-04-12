#!/usr/bin/python3
import sys

# Wikipedia api url
URL = "https://query.wikidata.org/sparql"

# Set a user Agent to request Wikidata
USER_AGENT = "Leia/%s.%s" % (
    sys.version_info[0], sys.version_info[1])

# Wikipedia params for requests list of taxon categories
WIKIDATA_QUERY = """SELECT ?esp_ce__teinte ?esp_ce__teinteLabel ?nom_scientifique_du_taxon ?taxon_sup_rieurLabel ?rang_taxinomiqueLabel ?image ?end_mique_deLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
  ?esp_ce__teinte wdt:P141 wd:Q237350.
  OPTIONAL { ?esp_ce__teinte wdt:P225 ?nom_scientifique_du_taxon. }
  OPTIONAL { ?esp_ce__teinte wdt:P171 ?taxon_sup_rieur. }
  OPTIONAL { ?esp_ce__teinte wdt:P105 ?rang_taxinomique. }
  OPTIONAL { ?esp_ce__teinte wdt:P18 ?image. }
  OPTIONAL { ?esp_ce__teinte wdt:P183 ?end_mique_de. }
}"""
