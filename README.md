# leia
Leia is a full stack application. This is an API build with python and Django Rest Framework using React.JS in user interface.

## Back-end

### Install a virtual env and dependencies

#### 1 - Install Pipenv
```
pip3 install pipenv
```

#### 2 - Activate virtual env
```
pipenv shell
```

#### 3 - Install dependencies
```
pipenv install
```

## Front-end
soon

## Run Back-end's tests

```
cd leiamanager/
./manage.py test
```

OR (if you need a coverage report)

```
cd leiamanager/
coverage run --source='.' manage.py test leia
coverage report
```