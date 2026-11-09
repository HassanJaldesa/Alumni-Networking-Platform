
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="border-b border-border bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
              AC
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-brand">
                Alumni Connect
              </h1>
              <p className="text-xs text-muted">
                Strathmore University
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 transition hover:text-brand"
            >
              About
            </Link>

            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 transition hover:text-brand"
            >
              How It Works
            </Link>

            <Link
              href="#benefits"
              className="text-sm font-medium text-gray-600 transition hover:text-brand"
            >
              Benefits
            </Link>
          </div>

          {/* Authentication Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand-light sm:inline-flex"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="bg-surface px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-accent-light px-4 py-2 text-sm font-semibold text-teal-800">
              Connecting Students and Alumni
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-brand sm:text-5xl lg:text-6xl">
              Your Journey Doesn't End at Graduation.
              <span className="text-accent">
                {" "}It Opens New Doors.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Alumni Connect brings Strathmore University students
              and alumni together through meaningful mentorship,
              professional networking, and personalised connections.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Join Alumni Connect
              </Link>

              <Link
                href="#how-it-works"
                className="rounded-lg border border-border bg-white px-7 py-3.5 text-sm font-semibold text-brand transition hover:bg-brand-light"
              >
                Discover How It Works
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted">
              Built for the Strathmore University community.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="bg-white px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Why Alumni Connect?
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Building Connections That Create Opportunities
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted">
              Whether you are a student looking for guidance or an
              alumnus ready to share your experience, Alumni Connect
              helps you build relationships that matter.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Benefit 1 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-2xl">
                🎓
              </div>

              <h3 className="mt-6 text-xl font-bold text-brand">
                Personalised Mentorship
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Connect with alumni mentors whose professional
                experience, industry knowledge, and skills align
                with your interests and career aspirations.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-light text-2xl">
                🤝
              </div>

              <h3 className="mt-6 text-xl font-bold text-brand">
                Professional Networking
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Build meaningful relationships with fellow students
                and graduates, expand your professional network,
                and discover new opportunities within the alumni
                community.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-2xl">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-bold text-brand">
                Career Development
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Gain valuable industry insights, practical career
                advice, and professional guidance from graduates
                who have experience navigating the workplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-surface px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Simple Three-Step Process
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              How Alumni Connect Works
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted">
              Getting started is simple. Create your profile,
              discover relevant connections, and begin building
              meaningful professional relationships.
            </p>
          </div>

          <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-2xl">
                  👤
                </div>

                <span className="text-4xl font-bold text-brand-light">
                  01
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-brand">
                Create Your Profile
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Register as a student or alumnus and build your
                profile by providing information about your
                academic background, professional experience,
                skills, interests, and career goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-light text-2xl">
                  🧠
                </div>

                <span className="text-4xl font-bold text-accent-light">
                  02
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-brand">
                Discover Relevant Matches
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Our machine-learning recommendation system
                analyses profile information to identify suitable
                alumni mentors based on shared interests, skills,
                professional backgrounds, and career aspirations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-2xl">
                  🤝
                </div>

                <span className="text-4xl font-bold text-brand-light">
                  03
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-brand">
                Connect and Grow
              </h3>

              <p className="mt-4 leading-7 text-muted">
                Explore recommended mentors, send mentorship
                requests, interact with alumni, and develop
                professional relationships that support your
                personal and career growth.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/register"
              className="inline-flex rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="bg-brand px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-300">
            Your Network Starts Here
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Be Part of a Community That Moves You Forward.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Connect with fellow Strathmore students and alumni,
            discover mentorship opportunities, and build
            relationships that make a difference in your career.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-brand transition hover:bg-gray-100"
            >
              Join Alumni Connect
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

            {/* Footer Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-lg font-bold text-brand">
                  AC
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Alumni Connect
                  </h3>

                  <p className="text-sm text-slate-400">
                    Strathmore University
                  </p>
                </div>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Connecting students and alumni through mentorship,
                professional networking, and meaningful
                opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>
                  <Link href="#about" className="transition hover:text-white">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="#benefits" className="transition hover:text-white">
                    Benefits
                  </Link>
                </li>

                <li>
                  <Link href="#how-it-works" className="transition hover:text-white">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Get Connected
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li>
                  <Link href="/register" className="transition hover:text-white">
                    Create an Account
                  </Link>
                </li>

                <li>
                  <Link href="/login" className="transition hover:text-white">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-slate-800 pt-7">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Alumni Connect.
              Strathmore University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
