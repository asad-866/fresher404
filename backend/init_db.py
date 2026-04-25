"""
Database initialization script - creates all tables from SQLAlchemy models
Run this once to set up the database schema
"""

import sys
from app.config.db import Base, engine
from app.models.resource import Resource
from app.models.user import User

def init_db():
    """Create all database tables"""
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("✓ Database tables created successfully!")
    print("\nCreated tables:")
    print("  - resources")
    print("  - users")

if __name__ == "__main__":
    try:
        init_db()
    except Exception as e:
        print(f"✗ Error creating database tables: {e}")
        sys.exit(1)
