"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"


export default function LayoutForAbout({children}) {
    const pathroute = usePathname();
  return (
    <div>
      
      {children}
    </div>
  )
}
