import React from 'react'
import "./latest.css"

const LatestProducts = () => {
  const products= useSelector(state => state.reducer.state)
  const dispatch = useDispatch()
  return (
    <div className='LatestSection'>
      <div className="container">
        <div className="LatestPage">
            <div className="textSection">
                <h1>Latest Products</h1>
                <ul>
                    <li>All</li>
                    <li>New</li>
                    <li>Featured</li>
                    <li>Offer</li>
                </ul>
            </div>
            <div className="cardsSection">
                salam
            </div>
            <hr />
        </div>
      </div>
    </div>
  )
}

export default LatestProducts
