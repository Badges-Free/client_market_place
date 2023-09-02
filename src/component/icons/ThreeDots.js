import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ThreeDots = ({ props, showOption, handleClick }) => {
    const handleClickEvent = () => {
        const data = showOption === false ? true : false;
        handleClick(data);
    }
    return (
        <BsThreeDotsVertical className={`${props}`} onClick={() => handleClickEvent()} />
    )
}

export default ThreeDots