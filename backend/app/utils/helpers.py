"""
Helper utilities for the application.
"""
from typing import List

def validate_tags(tags: List[str]) -> bool:
    """
    Validate that tags are from the allowed set.
    Allowed tags: remote, paid, free, beginner-friendly, certificate-included, team-based
    """
    allowed_tags = {"remote", "paid", "free", "beginner-friendly", "certificate-included", "team-based"}
    return all(tag.lower() in allowed_tags for tag in tags)

def validate_category(category: str) -> bool:
    """
    Validate that category is one of the allowed categories.
    """
    allowed_categories = {"internships", "certifications", "hackathons", "competitions", "camps"}
    return category.lower() in allowed_categories
