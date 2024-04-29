import React, { useState } from 'react'
import "./value.css"
const Value = ({count,handleChange}) => {
 
  return (
    
    <div>
        <input type="number" className='glowing-btn input' placeholder="Number write....." value={count} onChange={handleChange}/>
    </div>
  )
}

export default Value
