import React from 'react'
import "./header.css"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <header>


    <img src="./src/assets/images/logo.jpeg" alt="" />
    <nav>
        <ul>
            <li>
            <NavLink to={"/"} 
                className={({isActive})=>(isActive? "active":"teg")}
                
                >Home</NavLink>
            </li>
            <li>
            <NavLink to={"/users"} 
                className={({isActive})=>(isActive? "active":"teg")}
                
                >Users</NavLink>
            </li>
            <li>
            <NavLink to={"/products"} 
                className={({isActive})=>(isActive? "active":"teg")}
                
                >Products</NavLink>
            </li>
            <li>
            <NavLink to={"/post"} 
                className={({isActive})=>(isActive? "active":"teg")}
                
                >Post</NavLink>
            </li>
            

        </ul>
    </nav>

    </header>
  )
}

export default Header
