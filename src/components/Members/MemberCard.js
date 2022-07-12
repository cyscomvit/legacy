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
    <div className='m-2 h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
         <div className="card middle h-48 w-48">
      <div className="front">
        <img onLoad={increment}  className={` max-w-[30rem] object-cover`} src={props.pic} alt=""/>
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>{props.name}</h2>
          <span> {props.post} </span>
          <div class="sm">
            <a href={props.linkedin}><i class="fab fa-linkedin"></i></a>
            <a href={props.insta} ><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
