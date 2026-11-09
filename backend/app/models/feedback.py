
from datetime import datetime, timezone

from sqlalchemy import (
    CheckConstraint,
    DateTime,
    ForeignKey,
    Integer,
    Text,
    UniqueConstraint,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class Feedback(Base):
    """Stores feedback submitted about a mentorship experience."""

    __tablename__ = "feedback"

    __table_args__ = (
        CheckConstraint(
            "rating >= 1 AND rating <= 5",
            name="check_feedback_rating",
        ),
        UniqueConstraint(
            "mentorship_id",
            "reviewer_id",
            name="uq_feedback_mentorship_reviewer",
        ),
    )

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    # Mentorship being reviewed.
    mentorship_id: Mapped[int] = mapped_column(
        ForeignKey("mentorships.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    # User who submitted the feedback.
    reviewer_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    # Rating between 1 and 5.
    rating: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    comments: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        nullable=False,
    )

    # Relationships.
    mentorship: Mapped["Mentorship"] = relationship(
        "Mentorship",
        back_populates="feedback",
    )

    reviewer: Mapped["User"] = relationship(
        "User",
        back_populates="feedback_submitted",
        foreign_keys=[reviewer_id],
    )

