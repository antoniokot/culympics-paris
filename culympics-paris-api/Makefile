run:
	go run ./cmd/culympics-paris-api/main.go

mocks:
.PHONY: mockery
mockery:
	cd /tmp && go install github.com/vektra/mockery/v2@v2.42.0

mocks: mockery
	mockery --all --dir ./internal/api --output ./internal/api/mocks --with-expecter
	mockery --all --dir ./internal/service --output ./internal/service/mocks --with-expecter
	mockery --all --dir ./internal/dao --output ./internal/dao/mocks --with-expecter
