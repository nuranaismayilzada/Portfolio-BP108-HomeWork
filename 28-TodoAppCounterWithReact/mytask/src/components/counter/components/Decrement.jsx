import React from 'react'
import "./decrement.css"
const Decrement = ({count,setCount}) => {
  const dec = () => {
    if (!isNaN(count)) {
        setCount(prevValue => parseInt(prevValue, 10) - 1);
    }
}
  return (
    <div>
      <button className='glowing-btn' onClick={dec}>Dec</button>
    </div>

  )
}

export default Decrement
