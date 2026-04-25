from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.config.db import get_db
from app.models.resource import Resource
from app.schemas.resource_schema import ResourceResponse, ResourceCreate

router = APIRouter(tags=["resources"])

@router.get("/resources", response_model=List[ResourceResponse])
def get_all_resources(db: Session = Depends(get_db)):
    """Get all resources."""
    return db.query(Resource).all()

@router.get("/resources/{category}", response_model=List[ResourceResponse])
def get_resources_by_category(category: str, db: Session = Depends(get_db)):
    """Get resources by category: internships, certifications, hackathons, competitions, or camps."""
    resources = db.query(Resource).filter(Resource.category == category.lower()).all()
    return resources

@router.post("/resources", response_model=ResourceResponse, status_code=status.HTTP_201_CREATED)
def create_resource(resource: ResourceCreate, db: Session = Depends(get_db)):
    """Create a new resource."""
    db_resource = Resource(
        name=resource.name,
        description=resource.description,
        url=resource.url,
        category=resource.category.lower(),
        tags=resource.tags,
    )
    db.add(db_resource)
    db.commit()
    db.refresh(db_resource)
    return db_resource

@router.get("/resources/detail/{resource_id}", response_model=ResourceResponse)
def get_resource(resource_id: int, db: Session = Depends(get_db)):
    """Get a resource by ID."""
    resource = db.query(Resource).filter(Resource.id == resource_id).first()
    if not resource:
        raise HTTPException(status_code=404, detail="Resource not found")
    return resource

@router.put("/resources/{resource_id}", response_model=ResourceResponse)
def update_resource(resource_id: int, resource_update: ResourceCreate, db: Session = Depends(get_db)):
    """Update a resource."""
    resource = db.query(Resource).filter(Resource.id == resource_id).first()
    if not resource:
        raise HTTPException(status_code=404, detail="Resource not found")
    
    resource.name = resource_update.name
    resource.description = resource_update.description
    resource.url = resource_update.url
    resource.category = resource_update.category.lower()
    resource.tags = resource_update.tags
    
    db.commit()
    db.refresh(resource)
    return resource

@router.delete("/resources/{resource_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_resource(resource_id: int, db: Session = Depends(get_db)):
    """Delete a resource."""
    resource = db.query(Resource).filter(Resource.id == resource_id).first()
    if not resource:
        raise HTTPException(status_code=404, detail="Resource not found")
    
    db.delete(resource)
    db.commit()
