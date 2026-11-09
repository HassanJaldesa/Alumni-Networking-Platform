# Loads application and database settings from .env.
# Provides a central configuration accessible throughout the backend.

from pathlib import Path

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict
from sqlalchemy import URL


# Locate the backend directory regardless of where the application is launched.
BASE_DIR = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    # Application settings
    app_name: str = "Alumni Connect API"
    app_env: str = "development"
    debug: bool = True
    api_v1_prefix: str = "/api/v1"

    # Database settings
    database_user: str = "alumni_app"
    database_password: SecretStr = SecretStr("")
    database_host: str = "localhost"
    database_port: int = 5432
    database_name: str = "alumni_connect"

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    @property
    def database_url(self) -> URL:
        """Build a PostgreSQL connection URL safely."""
        return URL.create(
            drivername="postgresql+psycopg",
            username=self.database_user,
            password=self.database_password.get_secret_value(),
            host=self.database_host,
            port=self.database_port,
            database=self.database_name,
        )


settings = Settings()