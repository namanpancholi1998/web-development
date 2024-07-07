// import { NextResponse } from "next/server";

// export default function middleware(req) {
//   return NextResponse.redirect(new URL("/home", req.url));
// }

// export const config = {
//   matcher: "/about/:path*",
// };

import { NextResponse } from "next/server";

export default function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
}
