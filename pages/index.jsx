
import Link from "next/link"
import { useState } from 'react'
import Image from 'next/image'
import Nav from "@/components/Nav"



export default function Home() {
  return (
    <>
    <Nav/>
    <div className="flex items-center  justify-center flex-row bg-gradient-to-r from-sky-400 to-blue-500 w-full h-screen">
      
      <div className="flex-wrap">
      <div className="w-1/2">
      <h1 className="text-white font-bold text-5xl">hathooli</h1>
      <p className="mt-5 font-bold text-slate-300">Connecting Freelancers to Companies and Individuals</p>
      </div>
        
      <div className="flex ">
        <Image width={300} height={300} src={"/images/guywork.svg"}></Image>
      </div>
      </div>
    </div>
    </>
  )
}
