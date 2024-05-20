import React from 'react'
import "./imagepage.css"

const ImagePage = () => {
  return (
    <div className='imagepage'>
        <div className="imagePages">
        <div className="right-side">
            <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp" alt="" />
        </div>
      <div className="left-side">
        <p>60% Discount</p>
        <h1>Winter Collection</h1>
        <h6>Best Cloth Collection By 2020!</h6>
        <button>Shop Now</button>
      </div>
        </div>
    </div>
  )
}

export default ImagePage
