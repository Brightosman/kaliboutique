import React from 'react'
import {model} from "@/public/model.jpg"
import {model2} from "@/public/model2.jpg"
import {model3} from "@/public/model3.jpg"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
        {/** Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
                </div>
                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                </div>
            </div>
        </div>
        {/** Hero RightSide */}
        {/* <Image src={model3} alt="Model Image" className="w-full sm:w-1/2" /> */}
        <Image
          className="w-full sm:w-1/2"
          src="/model3.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        
        
    </div>
  )
}
