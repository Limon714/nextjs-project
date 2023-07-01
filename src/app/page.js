"use client"
import Image from "next/image"
import Profile from '../../public/vercel.svg'
import Link from "next/link"
import txt from './text.module.css'
import { useRouter } from "next/navigation"


export default function Page() {
  console.log(Profile)
  const router = useRouter();
  const navigate = (path)=>{
    router.push(path)
  }
  return (
    <div>
      <h1 className={txt.hello}> Next js | Deploy to Vercel </h1>
      <Image src={Profile}  alt="Image of the author" className="img"/>
     
{/* 
     <br />
     <br />
     <button onClick={()=>navigate("/about")}>Go to about page</button>
     <button onClick={()=>navigate("/service")}>Go to Service page</button> */}
    </div>
  )
}
