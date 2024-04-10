CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    country VARCHAR(100),
    name VARCHAR(100),
    address VARCHAR(255),
    image_url VARCHAR(255),
    description TEXT,
    latitude FLOAT,
    longitude FLOAT
);

COPY restaurants FROM '/docker-entrypoint-initdb.d/restaurants.csv' DELIMITER ',' CSV HEADER