import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white  '>
      <div className='flex justify-between items-center px-4 py-2 border-b-2 border-gray-600'>
        <div className='text-2xl font-bold'>
          <h2 >Shopify</h2>
        </div>
        <div className='flex space-x-4'>
          <FaFacebook className='text-xl cursor-pointer'/>
          <BsTwitter className='text-xl cursor-pointer'/>
          <BsYoutube className='text-xl cursor-pointer'/>
        </div>
      </div>
      <div className='text-center '>
        <p className='my-auto py-2'>Copyright &copy; 2023 Shopify. All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
