import React from 'react'
import "./card.css"
import Leftside from './Leftside';
import Rightside from './Rightside';
const Card = () => {
  return (
    <div className='card'>
      <Leftside/>
      <Rightside/>
    </div>
  )
}

export default Card
