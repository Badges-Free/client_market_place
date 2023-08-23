import React from 'react'
import logo from "../image/logo192.png";

function HeaderMobile() {
  return (
    <div className='w-full px-5 py-2 pb-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-b-lg text-white flex flex-col gap-5 shadow-blue-100 shadow-xl'>
        <img src={logo} alt="" width="50px"  />
        <div className='flex flex-row gap-5 w-full'>
             <input type='text' className=' rounded-lg py-2 px-3 outline-none text-gray-600 w-full ' placeholder='Search...'/>
            
        </div>
    </div>
  )
}

export default HeaderMobile