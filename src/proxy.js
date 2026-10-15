import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    const loginURL = new URL("/login", request.url);
    const callback = request.nextUrl.pathname + request.nextUrl.search;
    loginURL.searchParams.set("callbackUrL", callback);
    return NextResponse.redirect(loginURL);
  }
  return NextResponse.next()
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: "/courses/:path*",
};
