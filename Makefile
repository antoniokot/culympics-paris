database: 
	docker build -t culympics_database_image ./build/local/database
	docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 culympics_database_image

api:
	go run ./culympics-paris-api/cmd/culympics-paris-api/main.go