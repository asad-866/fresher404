from sqlalchemy import Column, Integer, String, ARRAY
from app.config.db import Base

class Resource(Base):
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String)
    url = Column(String, nullable=False)
    category = Column(String) # e.g., 'internships', 'hackathons' [cite: 259]
    tags = Column(ARRAY(String)) # e.g., ['remote', 'paid'] [cite: 28, 115]