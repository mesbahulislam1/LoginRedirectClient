"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

  const {data: session} = authClient.useSession()
  const user = session?.user;

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900"
        >
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="text-gray-700 transition hover:text-black"
          >
            Courses
          </Link>

          <Link
            href="/dashboard"
            className="text-gray-700 transition hover:text-black"
          >
            Dashboard
          </Link>

          <Link
            href="/profile"
            className="text-gray-700 transition hover:text-black"
          >
            Profile
          </Link>
        </div>

        {/* Auth Buttons */}
        {
          user ? <div className="">
            {
              modalOpen && <div className="relative">
              <div className="border rounded-md bg-blue-100 p-5 border-black/15 right-6 top-15 fixed">
              <h2 className="font-semibold text-sm">{user?.name}</h2>
              <p className="text-sm">{user?.email}</p>

              <button onClick={async()=>{ await authClient.signOut(); window.location.reload();}} className="bg-red-500 px-3 py-1.5 text-sm rounded-full mt-5 text-white capitalize cursor-pointer">sign out</button>
            </div>
            </div>
            }
            
            <button onClick={()=>setModalOpen(!modalOpen)} className=" uppercase font-bold bg-blue-500 flex justify-center items-center h-[40px] w-[40px] text-white cursor-pointer rounded-full">{user?.name.slice(0,2)}</button>
          </div>: <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
        }

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Home
            </Link>

            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Courses
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Dashboard
            </Link>

            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Profile
            </Link>

            <div className="flex gap-3 border-t pt-4">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-2"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-black px-5 py-2 text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}