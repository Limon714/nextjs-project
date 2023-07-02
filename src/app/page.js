"use client"
import txt from './text.module.css'
import { useRouter } from "next/navigation"

import { Fasthand } from 'next/font/google';
 const myFont = Fasthand({
      weight:'400',
      display:'swap',
      subsets:['latin'],
 })

export default function Page() {

  const router = useRouter();
  const navigate = (path)=>{
    router.push(path)
  }
  return (
    <>
    <div className={txt.hello}>
      <h1> Next js | Font Optimization </h1>
     <br />
     <br />
     <h1 className={myFont.className}>Learn, Practise, work with Nextjs 13.4</h1>

    </div>
    </>
  )
}
