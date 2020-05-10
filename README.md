# Leia 2.0

Leia is an open source project built with python and javascript.

## Quick Start

Before launching the project locally you need to install those dependencies: 
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Postgres App](https://postgresapp.com/) : Django database's dev's settings can be found in ```leia/backend/leia_backend/settings/development.py```
- make


Clone the repository: 

```git clone https://github.com/CoLoDot/leia.git```

Go to leia/

```cd leia/```

Launch virtual environment 

```make shell```

Install dependencies

```pipenv install```


Launch Docker Desktop and Postgress App 

### Run tests

```cd leia/```

```make shell```

Run back-end tests:

```make test_backend```

Run front-end tests:

```make test_frontend```

## & Launch the app !

```cd leia/```

```make```

Backend will be available at ```http://0.0.0.0:8000/api/```

Frontend will be available at ```http://localhost:3000/```