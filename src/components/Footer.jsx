import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-white"
            >
              MyApp
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              A simple and modern platform built with Next.js
              and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/courses"
                className="transition hover:text-white"
              >
                Courses
              </Link>

              <Link
                href="/dashboard"
                className="transition hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                href="/profile"
                className="transition hover:text-white"
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-gray-700"
              >
                F
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-gray-700"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-gray-700"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm transition hover:bg-gray-700"
              >
                G
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
            <p>
              © 2026 MyApp. All rights reserved.
            </p>

            <p>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}