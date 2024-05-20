import React from 'react'
import "./header.css"
import { MdOutlineDesktopWindows } from "react-icons/md";
import { MdOutlineTabletAndroid } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";



export const Header = () => {
  return (
    <>
    <header>
      <div className="headerSection">
        <div className="right-side">
          <img src="https://preview.colorlib.com/assets/img/logo.png" alt="" />
          <div className="estore">
            <span>+</span>
            <span>ESTORE</span>
          </div>
        </div>
        <div className="left-side">
        <MdOutlineDesktopWindows className='headericon' />
        <MdOutlineTabletAndroid className='headericon' />
        <FaMobileAlt className='headericon' />
        <BsFillCartFill className='headericon cart'/>
        <TiDelete className='headericon deletebtn' />
        </div>
      </div>
    </header>
    </>
  )
}
