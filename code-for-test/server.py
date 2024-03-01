from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Item(BaseModel):
    id: str
    value: str

items: List[Item] = []

@app.get("/items", response_model=List[Item])
async def read_items():
    return items

@app.post("/items", response_model=Item, status_code=201)
async def create_item(item: Item):
    items.append(item)
    return item

@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: str):
    for item in items:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.put("/items/{item_id}", response_model=Item)
async def update_item(item_id: str, item: Item):
    for idx, existing_item in enumerate(items):
        if existing_item.id == item_id:
            items[idx] = item
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/{item_id}", status_code=204)
async def delete_item(item_id: str):
    for idx, existing_item in enumerate(items):
        if existing_item.id == item_id:
            del items[idx]
            return
    raise HTTPException(status_code=404, detail="Item not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)


