import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/better-auth/config";
import { headers } from "next/headers";

const proxy = async (request: NextRequest) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};

export default proxy;
