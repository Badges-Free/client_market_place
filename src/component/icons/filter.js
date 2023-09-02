import React from 'react';
import { BsSliders2Vertical } from 'react-icons/bs';

const Filter = ({size}) => {
    return (
        <div>
            <BsSliders2Vertical className={size}/>
        </div>
    );
}

export default Filter;
