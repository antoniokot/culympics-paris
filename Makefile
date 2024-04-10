database-build:
	docker build -t culympics_database_image ./build/local/database

database: database-build
	docker run --name culympics_database_container -e POSTGRES_PASSWORD=password -d -p 5432:5432 culympics_database_image

