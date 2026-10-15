
"use client";

import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrL = searchParams.get("callbackUrL");

  console.log(callbackUrL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signdata = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      ...signdata,
      callbackURL: callbackUrL || "/",
    });

    if (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 outline-none focus:border-black"
              required
            />
          </div>

          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm font-medium text-slate-600 hover:text-black hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black py-2.5 font-medium text-white transition hover:bg-slate-800"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-black hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginForm />
    </Suspense>
  );
}
