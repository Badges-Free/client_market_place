import React from 'react';
import {FaMemory} from "react-icons/fa"
const Memory = ({size}) => {
    return (
        <>
            <FaMemory className={size}/>
        </>
    );
}

export default Memory;
