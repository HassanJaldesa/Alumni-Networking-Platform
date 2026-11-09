# Loads application settings from .env.
# Provides default values if a setting is missing.
# Makes the settings accessible throughout the backend using settings.

from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


# Locate the backend directory regardless of where the application is launched.
BASE_DIR = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    app_name: str = "Alumni Connect API"
    app_env: str = "development"
    debug: bool = True
    api_v1_prefix: str = "/api/v1"

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


settings = Settings()
