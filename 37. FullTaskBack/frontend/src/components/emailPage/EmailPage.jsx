import React from 'react'
import "./emailpage.css"
const EmailPage = () => {
  return (
    <div className='emailPage'>
      <div className="container">
        <div className="EmailPage">
            <div className="right-side">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png.webp" alt="" />
                <div className="textSide">
                    <h2>Get Our Latest Offers News</h2>
                    <p>Subscribe news latter</p>
                </div>
            </div>
            <div className="left-side">
                <div className="emailandShop">
                    <input type="text" placeholder='Your email here' name="" id="" />
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmailPage
