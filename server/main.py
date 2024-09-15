from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=False,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# In-memory list to store FAQs
faqs = []

# Pydantic model to define the structure of a FAQ
class FAQ(BaseModel):
    id: int
    question: str
    answer: str

# Helper function to find FAQ by ID
def find_faq(faq_id: int):
    for faq in faqs:
        if faq.id == faq_id:
            return faq
    return None

@app.get("/test")
async def test_route():
    return {"message": "This is a test route."}


# Create or Add a new FAQ
@app.post("/faqs", response_model=FAQ)
def create_faq(faq: FAQ):
    if find_faq(faq.id):
        raise HTTPException(status_code=400, detail="FAQ with this ID already exists.")
    faqs.append(faq)
    return faq

# Read or Get all FAQs
@app.get("/faqs", response_model=List[FAQ])
def get_all_faqs():
    return faqs

# Read or Get a specific FAQ by ID
@app.get("/faqs/{faq_id}", response_model=FAQ)
def get_faq(faq_id: int):
    faq = find_faq(faq_id)
    if faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found.")
    return faq

# Update an existing FAQ
@app.put("/faqs/{faq_id}", response_model=FAQ)
def update_faq(faq_id: int, updated_faq: FAQ):
    faq = find_faq(faq_id)
    if faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found.")
    
    faq.question = updated_faq.question
    faq.answer = updated_faq.answer
    return faq

# Delete an FAQ
@app.delete("/faqs/{faq_id}", response_model=FAQ)
def delete_faq(faq_id: int):
    faq = find_faq(faq_id)
    if faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found.")
    
    faqs.remove(faq)
    return faq
