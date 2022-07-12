import React, { useContext } from 'react'
import { AppConfig } from '../../context/AppConfig'
import './Cards.css'
export const MemberCard = (props) => {
    const {setnoloaded,noloaded} = useContext(AppConfig) 
    const increment = () =>{
        setnoloaded(noloaded+1)
    }
    //name,post,github,link,pic
  return (
    <div className='m-2 h-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
         <div className="card w-screen h-48  middle md:h-48 md:w-48">
      <div className="front flex flex-row justify-center items-center">
        <img onLoad={increment}  className={` md:max-w-[30rem] object-cover`} src={props.pic} alt=""/>
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>{props.name}</h2>
          <span> {props.post} </span>
          <div class="sm">
            <a href={props.link} target="_blank" ><i class="fab fa-linkedin"></i></a>
            <a href={props.git} target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
