# Description
The `server.go` file is part of a Go application that defines a simple REST API server for managing a collection of items. It includes a `main` function that sets up HTTP route handlers and starts the server. The server has handlers for different HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on items.

Each item is represented by an `Item` struct with an `ID` and a `Value`. The items are stored in an in-memory map called `store`, which is protected by a read-write mutex `mu` to allow safe concurrent access.

The `itemsHandler` function handles requests to the `/items` endpoint, allowing clients to retrieve a list of all items or create a new item. The `itemHandler` function handles requests to the `/items/:id` endpoint, allowing clients to retrieve, update, or delete a specific item by its ID.

The server uses standard library packages such as `net/http` for HTTP server functionality, `encoding/json` for JSON encoding and decoding, and `sync` for synchronization primitives.

# Test
```bash
go run server.go
# in separate terminal
curl -X GET http://localhost:8080/items
curl -X POST http://localhost:8080/items -H "Content-Type: application/json" -d '{"ID":"1","Value":"Item1"}'
curl -X GET http://localhost:8080/items/1
curl -X PUT http://localhost:8080/items/1 -H "Content-Type: application/json" -d '{"Value":"Updated Item1"}'
curl -X DELETE http://localhost:8080/items/1
```

# Task 
Ask code completion tool write server.test.js for testing server.go.