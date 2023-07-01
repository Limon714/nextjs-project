"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"


export default function LayoutForAbout({children}) {
    const pathroute = usePathname();
  return (
    <div>
        {/* {
            pathroute !== "/about/user" ?
            <h2>Common Layout for About and User Page</h2>
            : <Link href={"/"}> Go to Home Page </Link>
        } */}
      {children}
    </div>
  )
}
