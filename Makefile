all: up

build:
	docker-compose -f docker-compose.yml build

up:
	docker-compose -f docker-compose.yml up

stop:
	docker-compose -f docker-compose.yml stop

restart:
	docker-compose -f docker-compose.yml stop
	docker-compose -f docker-compose.yml up -d

status:
	docker-compose -f docker-compose.yml ps

clean:
	docker-compose -f docker-compose.yml down

shell:
	pipenv shell

run_backend:
	cd ./backend && ./manage.py runserver 0.0.0.0:8000

run_frontend:
	cd ./frontend && npm start

migrations:
	cd ./backend && ./manage.py makemigrations && ./manage.py migrate

test_frontend:
	cd ./frontend && npm install && npm test

test_backend:
	export DJANGO_SETTINGS_MODULE=leia_backend.settings.testing && \
	cd ./backend && coverage run --source='.' manage.py test && \
	coverage report -m

urls_debug:
	export DJANGO_SETTINGS_MODULE=leia_backend.settings.development && \
	cd ./backend && python manage.py show_urls