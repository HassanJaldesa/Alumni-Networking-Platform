# Alumni Connect – Backend

## 1. Overview

The Alumni Connect backend provides the REST API for the alumni networking and mentorship platform.

It is built using **FastAPI**, **Python**, **PostgreSQL**, and **SQLAlchemy**. PostgreSQL serves as the primary relational database, with the pgvector extension providing support for vector data and future machine-learning-based profile matching.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Python | Backend programming language |
| FastAPI | REST API framework |
| Uvicorn | ASGI application server |
| PostgreSQL | Relational database |
| pgvector | Vector storage and similarity search support |
| SQLAlchemy | Database ORM and session management |
| Psycopg 3 | PostgreSQL database driver |
| Pydantic Settings | Application configuration and environment variables |

## 3. Prerequisites

Install the following before setting up the backend:

- Python 3.13 or compatible version
- PostgreSQL 18
- pgvector extension compatible with the installed PostgreSQL version
- Git

## 4. Database Setup

### 4.1 Create the database

Open the PostgreSQL command-line interface:

```bash
psql -U postgres -h localhost
```

Create the development database:

```sql
CREATE DATABASE alumni_connect;
```

### 4.2 Enable pgvector

Connect to the database:

```sql
\c alumni_connect
```

Enable the pgvector extension:

```sql
CREATE EXTENSION vector;
```

Verify the extension:

```sql
SELECT extname, extversion
FROM pg_extension
WHERE extname = 'vector';
```

### 4.3 Create the application database user

Create a dedicated application role:

```sql
CREATE ROLE alumni_app WITH LOGIN;
```

Set its password securely:

```sql
\password alumni_app
```

Grant the required database permissions:

```sql
GRANT CONNECT ON DATABASE alumni_connect TO alumni_app;
GRANT USAGE, CREATE ON SCHEMA public TO alumni_app;
```

The application connects using this dedicated role rather than the PostgreSQL superuser.

## 5. Backend Installation

### 5.1 Navigate to the backend directory

```powershell
cd backend
```

### 5.2 Create a virtual environment

```powershell
python -m venv .venv
```

Activate it in PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 5.3 Install dependencies

```powershell
pip install -r requirements.txt
```

## 6. Environment Configuration

Create a local environment file using the example:

```powershell
Copy-Item .env.example .env
```

Update `.env` with your local database credentials:

```dotenv
APP_NAME=Alumni Connect API
APP_ENV=development
DEBUG=True
API_V1_PREFIX=/api/v1

DATABASE_USER=alumni_app
DATABASE_PASSWORD=your-local-password
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=alumni_connect
```

Replace the password placeholder with your actual local database password.

**Security:** Never commit `.env` or expose database credentials. The `.env` file is excluded through the project's `.gitignore`.

## 7. Running the Backend

From the backend directory, with the virtual environment activated, start the FastAPI development server:

```powershell
uvicorn app.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

## 8. API Documentation

FastAPI automatically provides interactive API documentation.

- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## 9. Health Checks

### General application health

```text
GET /health
```

Checks whether the FastAPI application is running.

### Database connectivity health

```text
GET /health/database
```

Checks whether the application can successfully communicate with PostgreSQL.

A successful database health check returns:

```json
{
  "status": "healthy",
  "database": "alumni_connect",
  "message": "Database connection successful"
}
```

## 10. Database Configuration Structure

The database integration is organised as follows:

```text
backend/
├── app/
│   ├── core/
│   │   ├── config.py
│   │   └── database.py
│   └── main.py
├── .env
├── .env.example
├── requirements.txt
└── README.md
```

- `config.py`: Loads application and database settings.
- `database.py`: Configures the SQLAlchemy engine, session factory, declarative base, and database session dependency.
- `main.py`: Defines the FastAPI application and health-check endpoints.
- `.env`: Stores local environment variables and database credentials.
- `.env.example`: Provides the environment configuration template.

## 11. Database Connection Testing

The database connection can be tested through the FastAPI endpoint:

```powershell
Invoke-RestMethod http://127.0.0.1:8000/health/database
```

A successful response confirms that the backend can connect to the configured PostgreSQL database.

---

**Project:** Alumni Connect  
**Component:** Backend API  
**Database:** PostgreSQL with pgvector