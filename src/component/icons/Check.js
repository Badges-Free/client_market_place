import React from 'react'
import {BsCheck} from'react-icons/bs';
function Check({color}) {
  return (
   <>
    <BsCheck className={color}/>
   </>
  )
}

export default Check