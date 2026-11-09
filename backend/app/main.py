
from fastapi import FastAPI

from app.core.config import settings


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
async def health_check():
    return {
        "status": "healthy",
        "application": settings.app_name,
    }
