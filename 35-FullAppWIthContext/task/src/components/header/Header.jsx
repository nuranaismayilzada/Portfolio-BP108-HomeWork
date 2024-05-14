import React from 'react'
import "./header.css"
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className="main">
                    <div className="left-side">
                        <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
                    </div>
                    <div className="right-side">
                        <div className="usd">
                            <p>USD</p>
                            <SlArrowDown />
                        </div>
                        <hr />
                        <div className="english">
                            <p>English</p>
                            <SlArrowDown />
                        </div>
                        <hr />
                        <div className="account">
                            <p>My Account</p>
                            <SlArrowDown />
                        </div>
                        <hr />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
