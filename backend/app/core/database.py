# Configures SQLAlchemy database connectivity.
# Provides the database engine, session factory and session dependency.

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from app.core.config import settings


# Create the SQLAlchemy engine.
# The engine is responsible for managing the database connection pool and executing SQL statements.
engine = create_engine(
    settings.database_url,
    # Configure the connection pool to pre-ping connections before use.
    pool_pre_ping=True, # pool_pre_ping=True: checks connections before using them.
    echo=settings.debug,
)


# Create a session factory.
# The session factory is responsible for creating new database sessions.
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False,
)


# Base class for all SQLAlchemy models.
# The Base class is used to define the structure of the database tables and their relationships.
class Base(DeclarativeBase):
    pass


# FastAPI dependency for managing database sessions.
# The get_db function is a generator that yields a database session and ensures that the session is closed after use.
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()