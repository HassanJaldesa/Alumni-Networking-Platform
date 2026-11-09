
from datetime import datetime, timezone

from sqlalchemy import DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class StudentProfile(Base):
    """Stores academic and personal information about a student."""

    __tablename__ = "student_profiles"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    # Each student profile belongs to exactly one user.
    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        unique=True,
        nullable=False,
    )

    # Academic information
    course: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    year_of_study: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    admission_year: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    # Additional profile information
    interests: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    bio: Mapped[str | None] = mapped_column(
        Text,
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
        back_populates="student_profile",
    )

    mentorships: Mapped[list["Mentorship"]] = relationship(
        "Mentorship",
        back_populates="student",
        cascade="all, delete-orphan",
    )
