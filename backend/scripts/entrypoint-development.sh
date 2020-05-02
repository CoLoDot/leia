#!/bin/bash
python manage.py makemigrations --no-input
python manage.py migrate --no-input
python manage.py loaddata leia_api/dumps/leia_api.json
python manage.py runserver 0.0.0.0:$PORT