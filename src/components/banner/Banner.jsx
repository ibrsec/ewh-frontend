import React from 'react'

const Banner = ({path,title}) => {
  return (
    <div className='relative flex items-center justify-center w-full  overflow-hidden h-[270px] border mb-24'>
        <img src={path} className='absolute w-full z-10 h-full object-cover object-top ' alt="banner" />
        <div className="absolute w-full h-full z-20 bg-dark-red opacity-90 "></div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold text-center relative z-30 animate-grow">{title}</h2>
    </div>
  )
}

export default Banner