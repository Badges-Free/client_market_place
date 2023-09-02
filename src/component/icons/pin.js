import React from 'react';
import {BsFillPinAngleFill} from "react-icons/bs"
const Pin = ({size}) => {
    return (
        <>
           <BsFillPinAngleFill className={size}/>
        </>
    );
}

export default Pin;
