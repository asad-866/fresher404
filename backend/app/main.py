from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import resource_routes, user_routes

app = FastAPI(title="Fresher404 API")

# Enable CORS so your React frontend can talk to this API [cite: 206, 207]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Vite's default port [cite: 232]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the resource routes defined in your sitemap [cite: 2, 269]
app.include_router(resource_routes.router, prefix="/api")
app.include_router(user_routes.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Fresher404 API is live"} [cite: 272]