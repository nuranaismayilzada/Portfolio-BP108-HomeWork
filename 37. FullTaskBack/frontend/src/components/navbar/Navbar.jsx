import React from 'react'
import "./navbar.css"
import { SlArrowDown } from "react-icons/sl";
export const Navbar = () => {
  return (
    <>
    <div className="navbarSection">
        <div className="container">
            <div className="navbar">
                <div className="left-side">
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/icon/header_icon.png.webp" alt="" />
                    <div className="usa">
                        <span className='usatext'>USA</span>
                        <SlArrowDown className='icon' />
                    </div>
                    <span className='number'>+777 2345 7886</span>
                </div>
                <div className="right-side">
                    <ul>
                        <li>My Account</li>
                        <li>Wish List</li>
                        <li>Shopping</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
