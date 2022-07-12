import React from 'react'
import { MemberCard } from './MemberCard'
import { data } from '../../assets/Members/MemberData'
export const Members = () => {
  return (
    <div className='flex flex-row justify-center w-screen items-center  '>
    <div className='flex flex-row flex-wrap'>
    {
data.map((item,k)=>(
    <div key ={k}>
        <MemberCard name = {item.name} post = {item.post} git = {item.git} link = {item.link} pic = {item.pic}/>

    </div>
))

    }
    </div>
  
    </div>
  )
}
