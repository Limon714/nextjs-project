import Link from "next/link"
export default function page() {
    return (
      <div>
        <h1> Product List</h1>
        <ul>
          <li>
            <Link href={"/service/product/laptop"}>Laptop</Link>
          </li>
          <li>
          <Link href={"/service/product/phone"}>Phone</Link>
          </li>
          <li>
          <Link href={"/service/product/watch"}>Watch</Link>
          </li>
        </ul>
      </div>
    )
  }
  