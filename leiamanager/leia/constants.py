#!/usr/bin/python3

# Wikipedia api url
URL = "https://en.wikipedia.org/w/api.php"

# Wikipedia params for requests list of taxon categories
CATEGORIES_PARAMS = {
    "action": "query",
    "cmtitle": "Category:IUCN Red List extinct species",
    "cmlimit": "8",
    "cmstartsortkeyprefix": "*",
    "cmprop": "ids|sortkeyprefix|title",
    "list": "categorymembers",
    "format": "json"
}
