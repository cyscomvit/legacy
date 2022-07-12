import React from 'react'
import { MemberCard } from './MemberCard'
import { data } from '../../assets/Members/MemberData'
export const Members = () => {
  return (
    <div className='flex flex-row justify-center md:w-screen items-center  '>
    <div className='flex flex-row flex-wrap justify-center'>
    {
data.map((item,k)=>(
    <div key ={k}>
        <MemberCard name = {item.name} post = {item.post} git = {item.github} link = {item.linkedin} pic = {item.pic}/>

    </div>
))

    }
    </div>
  
    </div>
  )
}
