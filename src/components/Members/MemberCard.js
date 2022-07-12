import React from 'react'
import './Cards.css'
export const MemberCard = (props) => {
    //name,post,github,link,pic
  return (
    <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 relative'>
         <div class="card middle">
      <div class="front">
        <img src={props.pic} alt=""/>
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
