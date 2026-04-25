from pydantic import BaseModel
from typing import List, Optional

class ResourceBase(BaseModel):
    name: str
    description: str
    url: str
    category: str
    tags: List[str]

class ResourceCreate(ResourceBase):
    pass

class ResourceResponse(ResourceBase):
    id: int
    class Config:
        from_attributes = True