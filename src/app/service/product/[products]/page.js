"use client"
import Link from "next/link"

export default function products({params}) {
  return (
    <div>
       <h1> Product Details</h1>
       <h2>Name : {params.products}</h2>
       <Link href={"/service/product"}>Go to Product page</Link>
    </div>
  )
}
