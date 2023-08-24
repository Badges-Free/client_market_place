import React from 'react'
import { Contact, IconHome, MenuBar, Notification } from '../icon/index'
import { Link } from 'react-router-dom'

function FooterMobile() {
  return (
    <div className=' fixed bottom-0 bg-white w-full py-1 px-5 flex flex-row justify-between items-center shadow-cyan-500 '>
        <div className='flex flex-col gap-0.5 items-center '>
          <Link to='/'> 
          <IconHome styles="text-[gray] text-[18px] cursor-pointer  "/>
            <span className='text-[10px] text-[gray]'> Home</span>
          </Link>
           
        </div>
        <div className='flex flex-col  items-center '>
            <Notification styles="text-[gray] text-[18px] cursor-pointer "/>
             
            <span className='text-[10px] text-[gray]'> Notifications</span>
        </div>
        <div className='flex flex-col gap-0.5 items-center '>
            <Contact styles="text-[gray] text-[20px] cursor-pointer "/>
            
            <span className='text-[10px] text-[gray]'> Contact</span>
        </div>
        <div className='flex flex-col gap-0.5 items-center '>
             <MenuBar styles="text-[gray] text-[18px] cursor-pointer "/>
             
            <span className='text-[10px] text-[gray]'>Menu</span>
        </div>
    </div>
  )
}

export default FooterMobile