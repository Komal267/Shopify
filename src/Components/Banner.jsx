import React from 'react'
import bannerImg from "/assets/head3.jpg"

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white px-8 w-90 mx-auto mb-4'>
        <h2 className='text-3xl font-bold mb-4'>Unleash Pure Sound</h2>
        <p className='mx-w-sm text-green-700 mb-6'> Premium Headphones engineered for immersive audio, all-day comfort, and cutting-edge design</p>
        <div className='relative'>
          <img src={bannerImg} alt="" className='w-80 h-70 object-contain'/>
        </div>
    </div>

  )
}

export default Banner
