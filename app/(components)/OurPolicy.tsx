import { CheckCircle2Icon, HeadsetIcon, SendToBack , Scale } from 'lucide-react'
import React from 'react'

export default function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs  sm:text-xs md:text-base text-gray-700">
        <div>
            {/* <Scale className='w-12 m-auto mb-5' /> */}
            <SendToBack  className='w-12 m-auto mb-5' />
            <p className='font semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer 30 days Exchange policy</p>
        </div>

        <div>
            <CheckCircle2Icon className='w-12 m-auto mb-5' />
            <p className='font semibold'>Easy Return Policy</p>
            <p className='text-gray-400'>We offer 30 days return policy</p>
        </div>

        <div>
            <HeadsetIcon className='w-12 m-auto mb-5' />
            <p className='font semibold'>Best customer support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}
