"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignupPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const signData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      ...signData
    });
    if (data.token) {
      redirect("/")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign up to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 outline-none focus:border-black"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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



          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-black py-2.5 font-medium text-white transition hover:bg-slate-800"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-black hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;