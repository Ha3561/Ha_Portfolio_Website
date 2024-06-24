import React from 'react'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'> 
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'> 
          <div className='flex flex-col items-center lg:items-center'>
            <h1 className='pb-16 text-4xl tracking-tight font-thin lg:mt-16 lg:text-6xl'>Harshit Verma</h1> 
            <h1 className='text-3xl font-thin'>
              <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>Full Stack, AI-ML developer</span>
            </h1> 
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sunt id nam corporis unde, doloribus quia. Dolorum veritatis nulla distinctio amet unde asperiores possimus eligendi consectetur nobis tenetur! Non, officiis?</p>
          </div> 
        </div>
        <div className='w-full lg:w-1/2 lg:p-4'>
          <div className='flex justify-center'>
            <img src='/images/ProfilePic.jpeg' alt="Harshit Verma"/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
