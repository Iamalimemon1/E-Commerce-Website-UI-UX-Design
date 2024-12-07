import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri";
import React from 'react'


function Navbar() {
  return (
    <header className='bg-white shadow-sm border-b mx-auto flex flex-col w-[1440px]'>
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
        <div className='text-center flex-1'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="" className="underline hover:text-slate-300">ShopNow</Link>
        </div>

        <div className='flex items-center gap-[2px]'>
          <div className='text-white text-sm font-normal leading-[21px]'>
            English
          </div>
          <RiArrowDropDownLine className='text-white text-3xl' />
        </div>
      </div>



    </header>
  )
}

export default Navbar