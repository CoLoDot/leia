FROM python:3.7

RUN apt-get -y install curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash \
  && apt-get install nodejs 

WORKDIR /app/backend

COPY ./backend/requirements.txt /app/backend/
RUN pip3 install --upgrade pip -r requirements.txt

WORKDIR /app/frontend

COPY ./frontend/package.json /app/frontend/
RUN $HOME/.npm/bin/npm install

COPY . /app/

RUN $HOME/.npm/bin/npm build

WORKDIR /app/frontend/build

RUN mkdir root && mv *.ico *.js *.json root

RUN mkdir /app/backend/staticfiles

WORKDIR /app

RUN DJANGO_SETTINGS_MODULE=leia_backend.settings.production \
  SECRET_KEY=myamazingsecretkey \
  python3 backend/manage.py collectstatic --noinput

EXPOSE $PORT

CMD python3 backend/manage.py runserver 0.0.0.0:$PORT