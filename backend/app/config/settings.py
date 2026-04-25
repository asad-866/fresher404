import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Settings:
    """
    Application settings loaded from environment variables.
    """
    database_url: str = os.getenv("DATABASE_URL", "postgresql://postgres:password@localhost:5432/fresher404")
    api_title: str = "Fresher404 API"
    api_version: str = "0.1.0"
    debug: bool = os.getenv("DEBUG", "True").lower() == "true"

settings = Settings()
