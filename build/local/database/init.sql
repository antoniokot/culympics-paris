CREATE TABLE restaurants (
    id UUID PRIMARY KEY NOT NULL,
    country VARCHAR(100),
    name VARCHAR(100),
    address VARCHAR(255),
    image_url VARCHAR(255),
    description TEXT,
    latitude FLOAT,
    longitude FLOAT
);

COPY restaurants FROM '/docker-entrypoint-initdb.d/restaurants.csv' DELIMITER ',' CSV HEADER