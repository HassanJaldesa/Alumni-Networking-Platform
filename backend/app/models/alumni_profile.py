
from datetime import datetime, timezone

from sqlalchemy import DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class AlumniProfile(Base):
    """Stores professional and academic information about an alumnus."""

    __tablename__ = "alumni_profiles"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    # Each alumni profile belongs to exactly one user.
    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        unique=True,
        nullable=False,
    )

    # Academic background
    course: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    graduation_year: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    # Professional information
    company: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    job_title: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    industry: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    professional_bio: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    skills: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    linkedin_url: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    # Timestamps
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    # Relationships
    user: Mapped["User"] = relationship(
        "User",
        back_populates="alumni_profile",
    )

    mentorships: Mapped[list["Mentorship"]] = relationship(
        "Mentorship",
        back_populates="alumni",
        cascade="all, delete-orphan",
    )

