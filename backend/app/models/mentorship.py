
from datetime import datetime, timezone

from sqlalchemy import DateTime, Enum, ForeignKey, Integer, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.enums import MentorshipStatus


class Mentorship(Base):
    """Represents a mentorship relationship between a student and an alumnus."""

    __tablename__ = "mentorships"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    # Student requesting mentorship.
    student_id: Mapped[int] = mapped_column(
        ForeignKey("student_profiles.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    # Alumni mentor receiving the request.
    alumni_id: Mapped[int] = mapped_column(
        ForeignKey("alumni_profiles.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    # Request and response information.
    request_message: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    mentor_response: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    # Current mentorship status.
    status: Mapped[MentorshipStatus] = mapped_column(
        Enum(
            MentorshipStatus,
            name="mentorship_status",
            native_enum=True,
            values_callable=lambda enum_class: [
                member.value for member in enum_class
            ],
        ),
        default=MentorshipStatus.PENDING,
        nullable=False,
    )

    # Timestamps.
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

    accepted_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )

    completed_at: Mapped[datetime | None] = mapped_column(
        DateTime(timezone=True),
        nullable=True,
    )

    # Relationships.
    student: Mapped["StudentProfile"] = relationship(
        "StudentProfile",
        back_populates="mentorships",
    )

    alumni: Mapped["AlumniProfile"] = relationship(
        "AlumniProfile",
        back_populates="mentorships",
    )

    feedback: Mapped[list["Feedback"]] = relationship(
        "Feedback",
        back_populates="mentorship",
        cascade="all, delete-orphan",
    )

