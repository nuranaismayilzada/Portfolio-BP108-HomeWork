import React from 'react'
import "./input.css"
const input = () => {
  return (
   <div className='inputandbutton'>
    <input type="text" placeholder='Search GitHub username' />
    <button>Search</button>
   </div>
  )
}

export default input
