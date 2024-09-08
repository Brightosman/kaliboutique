"use client"
import React, { useState } from 'react'

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { MenuIcon, MoveDownIcon, Search, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
    const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">

        <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} className="size-10" alt="Logo" />

            <h4 className="text-3xl font-semibold">
              Briile<span className="text-primary">Boutique</span>
            </h4>
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <Link href="" className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>
            <Link href="" className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>
            <Link href="" className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>
            <Link href="" className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>
        </ul>

        <div className="flex items-center gap-6">
            <Search className='w-5 cursor-pointer' />

            <div className="group relative">
                <User className='w-5 cursor-pointer'/>

                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>
            </div>
            <Link href="/cart" className='relative'>
                <ShoppingCart className='w-5 min-w-5' />
                <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
            </Link>
            <MenuIcon onClick={()=>setVisible(true)} className="w-5 cursor-pointer sm:hidden" />
        </div>
        {/*Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                    <MoveDownIcon className="h-4 rotate-90" />
                    <p>Back</p>
                </div>
                <Link onClick={()=>setVisible(false)} className="py-2 pl-6 border" href="/">HOME</Link>
                <Link onClick={()=>setVisible(false)} className="py-2 pl-6 border" href="/">COLLECTION</Link>
                <Link onClick={()=>setVisible(false)} className="py-2 pl-6 border" href="/">ABOUT</Link>
                <Link onClick={()=>setVisible(false)} className="py-2 pl-6 border" href="/">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}
