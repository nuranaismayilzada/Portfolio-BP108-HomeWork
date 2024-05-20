import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./pages.css"
const Pages = () => {
  return (
    <div className='PagesSection'>
      <div className="container">
        <div className="pagesSec">
          <div className="logoside">
            <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp" alt="" />
          </div>
          <div className="pagesSide">
            <ul>
              <li>Home</li>
              <li>Catagori</li>
              <li className='latest'>Latest <span className='hot'>HOT</span></li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="register-side">
            <div className="search">
              <input type='text' placeholder="Search product" />
              <CiSearch className='searchicon' />
            </div>
            <div className="favourite">
              <CiHeart className='heart' />
              <span className='heartCount'>2</span>
            </div>

            <div className="basket">
              <FaShoppingCart className='cart' />
              <span className='cartCount'>2</span>
            </div>
            <button className='signinBtn'>Sign In</button>
          </div>
        </div>
        <div className="menu">
          <span className="menuBar">
              <h1>MENU</h1>
            <GiHamburgerMenu className='burgerIcon' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Pages
