# Main entry point for the Alumni Connect FastAPI application.

from fastapi import FastAPI, HTTPException, status
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.core.config import settings
from app.core.database import engine


app = FastAPI(
    title=settings.app_name,
    description="Backend API for the Alumni Connect networking and mentorship platform.",
    version="1.0.0",
    debug=settings.debug,
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to Alumni Connect API",
        "environment": settings.app_env,
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "application": settings.app_name,
    }


@app.get("/health/database")
def database_health_check():
    """Check whether the application can communicate with PostgreSQL."""
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": settings.database_name,
            "message": "Database connection successful",
        }

    except SQLAlchemyError:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection failed",
        )