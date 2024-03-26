import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='flex flex-row justify-between w-full h-auto py-4  bg-white'>
      <div className=''>
        <span className='text-black ml-3'>Text To array</span>
      </div>
      <div  >
        <span className='text-black mx-3'>
         <Link href="/">Convert</Link> 
        </span>
        <span className='text-black mx-3'>
        <Link href="/saved"> Saved</Link>
        </span>
      </div>
    </div>
  )
}
