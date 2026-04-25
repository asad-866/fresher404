"""
Sample data insertion script for testing the API
"""

from app.config.db import SessionLocal
from app.models.resource import Resource
from datetime import datetime

def add_sample_data():
    """Add sample resources to the database"""
    db = SessionLocal()
    
    # Check if data already exists
    existing_count = db.query(Resource).count()
    if existing_count > 0:
        print(f"Database already contains {existing_count} resources. Skipping sample data insertion.")
        db.close()
        return
    
    sample_resources = [
        # Internships
        Resource(
            name="Internshala",
            description="India's largest internship platform connecting students with startups and companies",
            url="https://internshala.com",
            category="internships",
            tags=["remote", "paid", "beginner-friendly"]
        ),
        Resource(
            name="LinkedIn Internships",
            description="Official internship opportunities posted on LinkedIn by companies worldwide",
            url="https://linkedin.com/jobs/internship",
            category="internships",
            tags=["remote", "paid"]
        ),
        
        # Certifications
        Resource(
            name="Coursera",
            description="Learn from top universities and companies with thousands of courses",
            url="https://coursera.org",
            category="certifications",
            tags=["paid", "certificate-included"]
        ),
        Resource(
            name="FreeCodeCamp",
            description="Free coding courses with certificates in web development and programming",
            url="https://freecodecamp.org",
            category="certifications",
            tags=["free", "certificate-included", "beginner-friendly"]
        ),
        
        # Hackathons
        Resource(
            name="DevFolio",
            description="Discover and participate in hackathons around the world",
            url="https://devfolio.co",
            category="hackathons",
            tags=["team-based", "paid"]
        ),
        Resource(
            name="HackerEarth",
            description="Coding competitions and hackathons with real prizes",
            url="https://hackerearth.com",
            category="hackathons",
            tags=["competitive", "paid"]
        ),
        
        # Competitions
        Resource(
            name="Codeforces",
            description="Competitive programming platform with regular contests",
            url="https://codeforces.com",
            category="competitions",
            tags=["free", "competitive"]
        ),
        Resource(
            name="LeetCode Contests",
            description="Weekly and bi-weekly coding contests",
            url="https://leetcode.com/contest",
            category="competitions",
            tags=["free", "competitive", "beginner-friendly"]
        ),
        
        # Camps
        Resource(
            name="Google Summer of Code",
            description="Paid internship program by Google for open source contributions",
            url="https://summerofcode.withgoogle.com",
            category="camps",
            tags=["paid", "remote", "certificate-included"]
        ),
        Resource(
            name="MLH Fellowship",
            description="Major League Hacking Fellowship for aspiring engineers",
            url="https://fellowship.mlh.io",
            category="camps",
            tags=["paid", "remote", "team-based"]
        ),
    ]
    
    try:
        db.add_all(sample_resources)
        db.commit()
        print(f"✓ Successfully added {len(sample_resources)} sample resources to the database!")
        print("\nSample resources added:")
        for resource in sample_resources:
            print(f"  - {resource.name} ({resource.category})")
    except Exception as e:
        db.rollback()
        print(f"✗ Error adding sample data: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    add_sample_data()
