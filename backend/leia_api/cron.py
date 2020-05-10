#!/usr/bin/python3
from .taxon import Taxon
from sentry_sdk import capture_message, capture_event

def update_model_Taxon():
    capture_message('[START LEIA CRONJOB]')
    Taxon().insert_taxa()
    capture_message('[END LEIA CRONJOB]')