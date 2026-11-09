
"use client";

import { useState } from "react";
import Link from "next/link";

type UserRole = "student" | "alumni";

export default function RegisterPage() {
  const [role, setRole] = useState<UserRole>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    graduationYear: "",
    course: "",
    currentOccupation: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    setMessage(
      "Registration interface is ready. Account creation will be connected to the backend."
    );
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <main className="min-h-screen bg-surface">

      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
              AC
            </div>

            <div>
              <h1 className="text-xl font-bold text-brand">
                Alumni Connect
              </h1>
              <p className="text-xs text-muted">
                Strathmore University
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-muted transition hover:text-brand"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Registration Section */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-2xl">

          {/* Registration Card */}
          <div className="rounded-2xl border border-border bg-white p-8 shadow-lg sm:p-10">

            {/* Heading */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-2xl font-bold text-brand">
                AC
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand">
                Create Your Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted">
                Join the Strathmore University community and start
                building meaningful professional connections.
              </p>
            </div>

            {/* Role Selection */}
            <div className="mt-8">
              <label className={labelClass}>
                I want to register as a:
              </label>

              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  onClick={() => {
                    setRole("student");
                    setMessage("");
                  }}
                  className={`rounded-xl border-2 p-4 text-left transition ${
                    role === "student"
                      ? "border-brand bg-brand-light"
                      : "border-border bg-white hover:border-brand"
                  }`}
                >
                  <div className="text-2xl">🎓</div>

                  <p className="mt-2 font-bold text-brand">
                    Student
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted">
                    Looking for guidance and mentorship.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setRole("alumni");
                    setMessage("");
                  }}
                  className={`rounded-xl border-2 p-4 text-left transition ${
                    role === "alumni"
                      ? "border-brand bg-brand-light"
                      : "border-border bg-white hover:border-brand"
                  }`}
                >
                  <div className="text-2xl">🤝</div>

                  <p className="mt-2 font-bold text-brand">
                    Alumni
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted">
                    Ready to share experience and mentor.
                  </p>
                </button>

              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Personal Information */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-brand">
                  Personal Information
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className={inputClass}
                    />
                  </div>

                </div>
              </div>

              {/* Account Information */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-brand">
                  Account Information
                </h3>

                <div className="space-y-5">

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={inputClass}
                    />
                  </div>

                  {role === "student" && (
                    <>
                      <div>
                        <label htmlFor="studentId" className={labelClass}>
                          Student Registration Number
                        </label>

                        <input
                          id="studentId"
                          name="studentId"
                          type="text"
                          required
                          value={formData.studentId}
                          onChange={handleChange}
                          placeholder="Enter your student registration number"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="course" className={labelClass}>
                          Course / Programme
                        </label>

                        <input
                          id="course"
                          name="course"
                          type="text"
                          required
                          value={formData.course}
                          onChange={handleChange}
                          placeholder="e.g. Bachelor of Business Information Technology"
                          className={inputClass}
                        />
                      </div>
                    </>
                  )}

                  {role === "alumni" && (
                    <>
                      <div>
                        <label
                          htmlFor="graduationYear"
                          className={labelClass}
                        >
                          Year of Graduation
                        </label>

                        <input
                          id="graduationYear"
                          name="graduationYear"
                          type="number"
                          required
                          min="1950"
                          max={new Date().getFullYear()}
                          value={formData.graduationYear}
                          onChange={handleChange}
                          placeholder="e.g. 2022"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="course" className={labelClass}>
                          Course / Programme Studied
                        </label>

                        <input
                          id="course"
                          name="course"
                          type="text"
                          required
                          value={formData.course}
                          onChange={handleChange}
                          placeholder="Enter your former programme"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="currentOccupation"
                          className={labelClass}
                        >
                          Current Occupation
                        </label>

                        <input
                          id="currentOccupation"
                          name="currentOccupation"
                          type="text"
                          required
                          value={formData.currentOccupation}
                          onChange={handleChange}
                          placeholder="e.g. Software Engineer"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className={labelClass}>
                          Company / Organisation
                          <span className="ml-1 font-normal text-muted">
                            (Optional)
                          </span>
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter your organisation"
                          className={inputClass}
                        />
                      </div>
                    </>
                  )}

                </div>
              </div>

              {/* Password Information */}
              <div>
                <h3 className="mb-4 text-lg font-bold text-brand">
                  Security
                </h3>

                <div className="space-y-5">

                  <div>
                    <label htmlFor="password" className={labelClass}>
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={8}
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className={`${inputClass} pr-20`}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-accent hover:text-brand"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>

                    <p className="mt-2 text-xs text-muted">
                      Password must contain at least 8 characters.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className={labelClass}
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        minLength={8}
                        autoComplete="new-password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`${inputClass} pr-20`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-accent hover:text-brand"
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Feedback Message */}
              {message && (
                <div
                  role="alert"
                  className="rounded-lg bg-brand-light p-4 text-sm leading-6 text-brand"
                >
                  {message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                Create Account
              </button>

            </form>

            {/* Login Link */}
            <div className="mt-8 border-t border-border pt-6 text-center">
              <p className="text-sm text-muted">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold text-accent transition hover:text-brand"
                >
                  Sign in
                </Link>
              </p>
            </div>

          </div>

          {/* Supporting Text */}
          <p className="mt-8 text-center text-xs leading-6 text-muted">
            By joining Alumni Connect, you become part of a community
            dedicated to mentorship, networking and professional growth.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white px-6 py-5">
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} Alumni Connect. Strathmore University.
          All rights reserved.
        </p>
      </footer>

    </main>
  );
}
