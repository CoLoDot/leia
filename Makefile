all: up

up:
	docker-compose -f v2/docker-compose.yml up

stop:
	docker-compose -f v2/docker-compose.yml stop

restart:
	docker-compose -f v2/docker-compose.yml stop
	docker-compose -f v2/docker-compose.yml up -d

status:
	docker-compose -f v2/docker-compose.yml ps

clean:
	docker-compose -f v2/docker-compose.yml down