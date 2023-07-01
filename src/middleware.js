import { NextResponse } from "next/server";


export default function mymiddleware(request) {
    // if(request.nextUrl.pathname != ("/about")){
        return NextResponse.redirect(new URL("/about",request.url))
    //   }
  
}

// Single URL Redirect to specific page

export const config = {
    matcher:"/service/:path*",
}

