import React from 'react'
import "./footer.css"
import { FiPackage } from "react-icons/fi";
import { TfiUnlock } from "react-icons/tfi";
import { TfiReload } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footerPage'>
      <div className="container">
        <div className="footer">
            <div className="topSide">
                <div className="secOne">
                <FiPackage className='fipackage' />
                <h6>Free Shipping Method</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
                <div className="secTwo">
                <TfiUnlock className='unlock' />
                <h6>Secure Payment System</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
                <div className="secThree">
                <TfiReload className='reload' />
                <h6>Secure Payment System</h6>
                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
            </div>

            <div className="bottomSide">
                <div className="logoEstoreSide">
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo2_footer.png.webp" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className="quickSide">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About</li>
                        <li> Offers & Discounts</li>
                        <li> Get Coupon</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="newProductsSide">
                    <h4>New Products</h4>
                    <ul>
                        <li>Woman Cloth</li>
                        <li>Fashion Accessories</li>
                        <li>Man Accessories</li>
                        <li>Rubber made Toys</li>
                    </ul>
                </div>
                <div className="supportSide">
                    <h4>Support</h4>
                    <ul>
                        <li>Frequently Asked Questions</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Privacy Policy</li>
                        <li>Report a Payment Issue</li>
                    </ul>
                </div>
            </div>

            <div className="footerSide">
                <div className="right-side">
                    <p>Copyright ©2024 All rights reserved | This template is made with by Colorlib</p>
                </div>
                <div className="iconSide">
                <FaTwitter className='icon' />
                <FaFacebook className='icon' />
                <FaBehance className='icon'/>
                <CiGlobe className='icon'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
