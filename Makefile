all: up

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

test_frontend:
	cd ./frontend && npm test

test_backend:
	cd ./backend && coverage run --source='.' manage.py test && coverage report