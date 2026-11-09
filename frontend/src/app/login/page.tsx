
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(
      "Login interface is ready. Authentication will be connected to the backend."
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-surface">

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

      {/* Login Content */}
      <section className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Login Card */}
          <div className="rounded-2xl border border-border bg-white p-8 shadow-lg sm:p-10">

            {/* Heading */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-2xl font-bold text-brand">
                AC
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-brand">
                Welcome Back
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted">
                Sign in to your Alumni Connect account and continue
                building meaningful connections.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 pr-20 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-accent transition hover:text-brand"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Message */}
              {message && (
                <div
                  role="status"
                  className="rounded-lg bg-brand-light p-3 text-sm leading-6 text-brand"
                >
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>

            {/* Registration Link */}
            <div className="mt-8 border-t border-border pt-6 text-center">
              <p className="text-sm text-muted">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-bold text-accent transition hover:text-brand"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="mt-8 text-center text-xs leading-6 text-muted">
            Connecting the Strathmore University community through
            mentorship and professional networking.
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
