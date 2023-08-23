import React from 'react'
import {FaBell} from'react-icons/fa'
function Notification({styles}) {
  return (
    <>
        <FaBell className={styles}/>
    </>
  )
}

export default Notification