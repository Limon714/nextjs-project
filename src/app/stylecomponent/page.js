"use client"
import custom from '../custom.module.css'
import btn from '../button.module.css'
import txt from '../text.module.css'

import { useState } from 'react'
export default function Page() {
  const [color, setColor] = useState("red")
  return (
    <div>
      <p className={color=='red'?custom.hello:btn.hello}>We are Bengali</p>
      <h3 className={color=='green'?txt.hello:btn.hello}>testing text</h3>
      <button onClick={()=>setColor("blue")}  className={btn.button}> Click me</button>
   
    </div>
  )
}
