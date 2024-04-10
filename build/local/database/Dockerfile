FROM postgres:latest

COPY data/restaurants.csv /docker-entrypoint-initdb.d/

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER postgres

ENV POSTGRES_PASSWORD password

ENV POSTGRES_DB mydatabase