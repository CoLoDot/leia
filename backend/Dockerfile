FROM python:3.7-alpine

WORKDIR /app/backend

COPY requirements.txt /app/backend
RUN  \
    apk update && \
    apk upgrade && \
    apk add bash && \
    apk add libffi-dev && \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip3 install pip -r requirements.txt && \
    apk --purge del .build-deps

COPY . /app/backend
COPY ./scripts/ /app/

ENV PORT 8000
EXPOSE 8000

RUN ["chmod", "+x", "/app/entrypoint-development.sh"]
ENTRYPOINT [ "/app/entrypoint-development.sh" ]