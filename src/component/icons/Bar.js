import React from 'react'
import { FaBars } from 'react-icons/fa'


const Bar = ({color}) => {
    return (
        <FaBars className={color} />
    )
}

export default Bar