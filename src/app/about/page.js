import Link from "next/link"


export default function page() {
  return (
    <div>
      <h1> Hello Next JS About Page !!</h1>
      <hr />
     <Link href="/">Go to Home page</Link>
     <hr />
     <Link href="/service">Go to Service page</Link>
    </div>
  )
}
