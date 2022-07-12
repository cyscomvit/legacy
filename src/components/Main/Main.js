import React, { useContext } from 'react'
import { AppConfig } from '../../context/AppConfig'



import { Members } from '../Members/Members'
import Loader from '../Loader/Loader'

export const Main = () => {
    const {loaded} = useContext(AppConfig)
  return (
    <>

  
    
      <div className='w-screen min-h-screen'>
      

      <div class={`w-screen h-screen ${loaded?"block":"hidden"}   `}>
      
        <Members/>
      </div>

  <div class={`absolute w-screen h-screen bg-black   top-0 bottom-0 left-0 z-9 ${loaded?"hidden":"block"} ` }>  
  <Loader/> 
   </div>


          </div>
    </>
 
  )
}
