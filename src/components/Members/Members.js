import React from 'react'
import { MemberCard } from './MemberCard'
import { data } from '../../assets/Members/MemberData'

export const Members = () => {
  return (
    <>
   
    <div className='flex flex-row justify-center md:w-screen items-center '>
    <div className='flex flex-row flex-wrap justify-center m-0  '>
    {
data.map((item,k)=>(
    <div key ={k} className="m-2" >
        <MemberCard name = {item.name} post = {item.post} git = {item.github} link = {item.linkedin} pic = {item.pic}/>

    </div>
))

    }
    </div>
  
    </div>
    <footer className="footer">
    <p>CYSCOM VITCC | Think before you click.</p>
    <div class="footer-links">
      <a href="https://facebook.com/cyscomvit/"><i className="fab fa-facebook-f"  target="_blank"></i></a>
      <a href="https://instagram.com/cyscomvit/"><i className="fab fa-instagram" target="_blank"></i></a>
      <a href="https://twitter.com/CyscomVit/"><i className="fab fa-twitter" target="_blank"></i></a>
      <a href="https://www.linkedin.com/company/cyscomvit/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/cyscomvit"><i className="fab fa-github" target="_blank"></i></a>
      <a href="https://discord.gg/9RyHCQgjAv"><i className="fab fa-discord" target="_blank"></i></a>
      <a href="https://blog.cyscomvit.com/"><i className="fab fa-blogger-b" target="_blank"></i></a>
      <a href="https://medium.cyscomvit.com/"><i className="fab fa-medium-m" target="_blank"></i></a>
    </div>
  </footer>
    </>
  )
}
