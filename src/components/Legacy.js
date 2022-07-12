import React from 'react'
import smoke from '../assets/Legacy/smoke.mp4'
export const Legacy = () => {
  return (
 <div className='bg-black relative w-screen h-screen'>
    <video className='w-screen h-screen'  muted autoPlay loop>
<source src = {smoke} type = "video/mp4"/>

    </video>
    <div className= 'animate-pulse text-white absolute top-0 left-0 w-screen h-screen flex items-center justify-center text-8xl font-bold  '>
        <h1>MEET OUR LEGACY</h1>
        </div>
    </div>
   
  )
}
