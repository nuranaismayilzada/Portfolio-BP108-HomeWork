import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

const Footer = () => {
  return (
    <section className="topSection">
      <div className="container">
        <div className="info">
          <div className="leftbox">
            <h2>Newsletter</h2>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
          <div className="rightbox">
            <input type="text" placeholder="Your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="foot-side">
          <div className="leftSide">
            <div>Blog</div>
            <div>FAQ</div>
            <div>Contact us</div>
          </div>
          <div className="rightSide">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaSkype />
            </div>
            <div>
              <FaPinterest />
            </div>
          </div>
        </div>
        <div className="text">
          <p>
            ©2018 All Rights Reserverd. This template is made with  <GoHeart />  by Colorlib
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;