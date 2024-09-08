import React from 'react'

export default function NewsletterBox() {
    const onSubmitHandler = (event: any) => {
        event.preventDefault()
    }
  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
        <p className="text-gray-400 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard</p>
        <form /*onSubmit={onSubmitHandler} */ className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder='Enter yourEmail' required />
            <button className="bg-black text-white text-xs px-10 py-4" type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}
