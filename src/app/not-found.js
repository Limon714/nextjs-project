import Link from "next/link"


export default function notfound() {
  return (
    <div>
      <h1> This URL is not available </h1>
      <Link href="/">Go to Home page</Link>
    </div>
  )
}
