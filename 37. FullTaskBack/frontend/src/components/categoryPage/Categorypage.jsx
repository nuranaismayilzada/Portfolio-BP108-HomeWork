import React from 'react'
import "./categorypage.css"
const Categorypage = () => {
  return (
    <div className='categoryPage'>
        <div className="container">
        <h2>Shop by Category</h2>
        <div className="cardsCategory">
            <div className="cardOne card">
                <h1>Owmen`S</h1>
                <button>Best New Deals</button>
                <p>New Collection</p>
            </div>
            <div className="cardTwo card">
                <h6>Discount!</h6>
                <h2>Winter Cloth</h2>
                <p>New Collection</p>
            </div>
            <div className="cardThree card">
            <h1>Man`S</h1>
                <button>Best New Deals</button>
                <p>New Collection</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Categorypage
