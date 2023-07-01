
"use client"
export default function product({price}) {
  return (
    <div>
      <button onClick={()=>alert(price)}>Get price</button>
    </div>
  )
}

