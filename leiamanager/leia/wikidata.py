# pip install sparqlwrapper
# https://rdflib.github.io/sparqlwrapper/

import sys
from SPARQLWrapper import SPARQLWrapper, JSON

endpoint_url = "https://query.wikidata.org/sparql"

query = """SELECT ?Wikimedia_Commons ?taxon_name ?dissolved__abolished_or_demolished ?endemic_to ?endemic_toLabel ?Commons_category ?taxon_range_map_image ?taxon_nameLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
  ?Wikimedia_Commons wdt:P31 wd:Q23038290;
    wdt:P141 wd:Q237350.
  OPTIONAL {  }
  OPTIONAL { ?Wikimedia_Commons wdt:P225 ?taxon_name. }
  OPTIONAL { ?Wikimedia_Commons wdt:P576 ?dissolved__abolished_or_demolished. }
  OPTIONAL { ?Wikimedia_Commons wdt:P183 ?endemic_to. }
  OPTIONAL { ?Wikimedia_Commons wdt:P373 ?Commons_category. }
  OPTIONAL { ?Wikimedia_Commons wdt:P181 ?taxon_range_map_image. }
  
}
LIMIT 100"""


def get_results(endpoint_url, query):
    user_agent = "WDQS-example Python/%s.%s" % (
        sys.version_info[0], sys.version_info[1])
    # TODO adjust user agent; see https://w.wiki/CX6
    sparql = SPARQLWrapper(endpoint_url, agent=user_agent)
    sparql.setQuery(query)
    sparql.setReturnFormat(JSON)
    return sparql.query().convert()


results = get_results(endpoint_url, query)

for result in results["results"]["bindings"]:
    print(result)

# https://github.com/dahlia/wikidata
