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