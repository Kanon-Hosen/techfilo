import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const BearerToken = await req?.headers.get("authorization");
  // console.log("b", BearerToken)
  console.log(BearerToken)
    if (req?.nextUrl.pathname.endsWith("/email")) {
      return NextResponse.next();
    }
  if (!BearerToken) {
    return Response.json({
      errorMessage: "Bearer not defined",
    });
  }
  const token = BearerToken.split(" ")[1];
  // console.log("token", token)
  if (!token || token === "null") {
    return Response.json({
      errorMessage: "Bearer not defined",
    });
  }
};

export const config = {
  matcher: ["/api/:path*"],
};
