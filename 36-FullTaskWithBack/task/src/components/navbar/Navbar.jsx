import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import {NavLink} from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
        <nav>
            <div className="container">
                <div className="mainNavbar">
                <div className="navbarLeft-side">
                    <h2>COLO<span>SHOP</span></h2>
                </div>
                <div className="navbarRight-side">
                    <div className="pages">
                        <ul>
                            <NavLink to={"/"}>Home</NavLink>
                            <li>SHOP</li>
                            <li>PROMOTION</li>
                            <li>PAGES</li>
                            <li>BLOG</li>
                            <li>CONTACT</li>
                            <NavLink to={"/add"}>Add</NavLink>
                        </ul>
                    </div>
                    <div className="icons">
                        <div className="searchIcon">
                        <CiSearch />
                        </div>
                        <div className="shopIcon">
                        <FaUser />
                        </div>

                        <NavLink to={"/basket"}>
                        <div className="basketIcon">
                        <IoCart /> 
                        <span>2</span>
                        </div>
                        </NavLink>
                        
                    </div>
                </div>
                </div>
                
            </div>
        </nav>
  )
}

export default Navbar
