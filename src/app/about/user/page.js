"use client"

import { useState } from "react"

export default function page() {
  const [bgcolor, setColor] = useState({backgroundColor:"lime"})
  return (
    <div>
      <h1> User comes from about page</h1>
      <h2 style={bgcolor}>Learn Style component </h2>
      <br />
      <br />
      <button onClick={()=>setColor({backgroundColor:"orange"})}>Change color</button>
    </div>
  )
}
