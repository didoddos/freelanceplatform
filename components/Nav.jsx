import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Nav() {
  return (
    <div className='flex p-10 justify-between bg-gradient-to-r from-sky-400 to-blue-500'>
        <div className='flex'><Image alt="sdfkjsdakf"height={20} width={50}src={"/images/logo.svg"}></Image></div>
        <div><Link className='m-5 text-white font-bold ' href={"/Contact"}>Contact</Link>
        <Link className="m-5 text-white font-bold"href={"/socials"}>Socials</Link>
        <Link className="m-5 text-white font-bold"href={"/Login"}>Login</Link></div>
    </div>
  )
}
