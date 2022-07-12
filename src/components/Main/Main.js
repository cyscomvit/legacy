import React, { useContext } from 'react'
import { AppConfig } from '../../context/AppConfig'

import { Legacy } from '../Legacy/Legacy'
import { Members } from '../Members/Members'
import Loader from '../Loader/Loader'
export const Main = () => {
    const {loaded} = useContext(AppConfig)
  return (
    <>

  
    
      <div className='relative w-screen min-h-screen'>
      

      <div class={` absolute top-0 left-0 w-screen h-screen ${loaded?"block":"hidden"}   `}>
      <Legacy/>
        <Members/>
      </div>

  <div class={`absolute w-screen h-screen bg-black   top-0 bottom-0 left-0 z-9 ${loaded?"hidden":"block"} ` }>  
  <Loader/> 
   </div>


          </div>
    </>
 
  )
}
