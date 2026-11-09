# This file defines enumerations used in the Alumni Connect application.
import enum


class UserRole(str, enum.Enum):
    """Available account roles within Alumni Connect."""

    STUDENT = "student"
    ALUMNI_MENTOR = "alumni_mentor"
    ADMIN = "admin"


class MentorshipStatus(str, enum.Enum):
    """Possible states of a mentorship request."""

    PENDING = "pending"
    ACCEPTED = "accepted"
    REJECTED = "rejected"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
