"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {

   const pathName = usePathname()
  
  return (
    <aside className="hidden w-72 shrink-0 bg-slate-950 text-white md:block">
      <div className="sticky top-0 flex h-screen flex-col">

        {/* Logo */}
        <div className="border-b border-slate-800 px-6 py-6">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-bold text-slate-950">
              M
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                MyApp
              </h1>

              <p className="text-xs text-slate-400">
                Dashboard
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Main Menu
          </p>

          <div className="space-y-2">

            {/* Dashboard */}
            <Link
              href="/dashboard"
              className={`group flex items-center gap-3 rounded-xl ${pathName ==='/dashboard' && 'bg-amber-500 text-slate-950 shadow-amber-500/10 font-semibold' }  px-4 py-3 text-sm   shadow-lg  transition hover:bg-amber-400`}
            >
              <span className="text-lg">
                ◈
              </span>

              <span>
                Dashboard
              </span>
            </Link>

            {/* Profile */}
            <Link
              href="/dashboard/profile"
              className={`group flex items-center gap-3 rounded-xl ${pathName ==='/dashboard/profile' && 'bg-amber-500 text-slate-950 shadow-amber-500/10 font-semibold' }  px-4 py-3 text-sm   shadow-lg  transition hover:bg-amber-400`}
            >
              <span className="text-lg">
                ◯
              </span>

              <span>
                Profile
              </span>
            </Link>

            {/* Courses */}
            <Link
              href="/dashboard/courses"
              className={`group flex items-center gap-3 rounded-xl ${pathName ==='/dashboard/courses' && 'bg-amber-500 text-slate-950 shadow-amber-500/10 font-semibold' }  px-4 py-3 text-sm   shadow-lg  transition hover:bg-amber-400`}
            >
              <span className="text-lg">
                ▣
              </span>

              <span>
                My Courses
              </span>
            </Link>

            {/* Settings */}
            <Link
              href="/dashboard/add"
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <span className="text-lg">
                ⚙
              </span>

              <span>
                Add Course
              </span>
            </Link>

          </div>
        </nav>

        {/* User Section */}
        <div className="border-t border-slate-800 p-4">

          <div className="mb-4 flex items-center gap-3 rounded-xl bg-slate-900 p-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-semibold text-slate-950">
              M
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Mesbah
              </p>

              <p className="truncate text-xs text-slate-500">
                Student Account
              </p>
            </div>

          </div>

          {/* Back Home */}
          <Link
            href="/"
            className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>

          {/* Logout */}
          <button
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
          >
            <span>↪</span>
            <span>Logout</span>
          </button>

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
