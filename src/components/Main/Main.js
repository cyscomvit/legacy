import React, { useContext } from 'react'
import { AppConfig } from '../../context/AppConfig'



import { Members } from '../Members/Members'
import Loader from '../Loader/Loader'
import Landing from '../Landing/Landing'

export const Main = () => {
    const {loaded} = useContext(AppConfig)
  return (
    <>

  
    
      <div className='w-screen min-h-screen '>
      

      <div class={`max-w-96 h-screen ${loaded?"block":"hidden"}   `}>
      <Landing/>
        <Members/>
      </div>

  <div class={`absolute w-screen h-screen bg-black   top-0 bottom-0 left-0 z-9 ${loaded?"hidden":"block"} ` }>  
  <Loader/> 
   </div>


          </div>
    </>
 
  )
}
