import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex bg-green-600 flex-col justify-center h-[90vh] text-white text-center px-4' style={{ backgroundImage: "url('/src/assets/hero-bg.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
     }}>
      <h2 className='text-4xl md:text-6xl mb-4 font-bold'>Welcome to my Website</h2>
      <p className='text-lg md:xl mb-4'>Your Journey  Start Here</p>
      <button className='bg-white text-indigo-600 hover:bg-gray-200 px-6 py-2 rounded-md cursor-pointer'>Purchase Products</button>
    </div>
  )
}

export default HeroSection