import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ id, name, slug, image }) => {
    return (
        <NavLink
            to={slug}
            className={({ isActive }) => {
                return ("nav-link flex items-center p-2 hover:text-button-blue hover:bg-opacity-10 hover:bg-blue-500 rounded-lg transition-all duration-[500ms] ease-out " + (
                    !isActive
                        ? "text-sub-title"
                        : "text-button-blue bg-opacity-10 bg-button-blue"
                ))
            }}>
            <img className="w-[25px]" src={`https://seyhashop.onrender.com/`+image} alt={id} />
            <span className="ml-3 capitalize font-[500]">{name}</span>
        </NavLink>
    )
}

export default Item