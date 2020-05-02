#!/bin/bash
python backend/manage.py makemigrations --no-input
python backend/manage.py migrate --no-input
python backend/manage.py loaddata leia_api/dumps/leia_api.json
python backend/manage.py runserver 0.0.0.0:$PORT