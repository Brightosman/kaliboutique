import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export default function Footer() {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            <div className="">
                <Image src={Logo} className="mb-5 w-16" alt="Logo" />
                <p className="w-full md:w-1/3 text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>PrivacyPolicy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li> +33(0) 7 51 15 6594</li>
                    <li> contact@baba9ja.com </li>
                </ul>
            </div>
        
        </div>
        <div>
            <hr className=''/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ Briile Boutique  -  All rights reserved</p>
        </div>
    </div>
  )
}
