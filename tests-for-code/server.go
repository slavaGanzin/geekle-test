package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
)

type Item struct {
	ID    string `json:"id"`
	Value string `json:"value"`
}

var (
	store = make(map[string]Item)
	mu    sync.RWMutex
)

func main() {
	http.HandleFunc("/items", itemsHandler)
	http.HandleFunc("/items/", itemHandler)

	fmt.Println("Server is running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func itemsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
	case http.MethodGet:
		mu.RLock()
		items := make([]Item, 0, len(store))
		for _, item := range store {
			items = append(items, item)
		}
		mu.RUnlock()
		json.NewEncoder(w).Encode(items)

	case http.MethodPost:
		var item Item
		if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		mu.Lock()
		store[item.ID] = item
		mu.Unlock()
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(item)

	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func itemHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	id := r.URL.Path[len("/items/"):]

	switch r.Method {
	case http.MethodGet:
		mu.RLock()
		item, ok := store[id]
		mu.RUnlock()
		if !ok {
			http.NotFound(w, r)
			return
		}
		json.NewEncoder(w).Encode(item)

	case http.MethodPut:
		var item Item
		if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		if item.ID != id {
			http.Error(w, "ID in URL does not match ID in body", http.StatusBadRequest)
			return
		}
		mu.Lock()
		store[id] = item
		mu.Unlock()
		json.NewEncoder(w).Encode(item)

	case http.MethodDelete:
		mu.Lock()
		delete(store, id)
		mu.Unlock()
		w.WriteHeader(http.StatusNoContent)

	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}
