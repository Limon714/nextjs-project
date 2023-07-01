import Link from "next/link"


export default function aboutnotfound() {
    return (
      <div>
        <h1> This URL is not available for About Page </h1>
        <Link href="/about">Go to About page</Link>
      </div>
    )
  }