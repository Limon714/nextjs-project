import Link from "next/link"

export default function product() {
  return (
    <div>
      <h1> Hello from Service page !!</h1>
      <hr />
     <Link href="/">Go to Home page</Link>
     <hr />
     <Link href="/about">Go to About page</Link>
    </div>
  )
}
