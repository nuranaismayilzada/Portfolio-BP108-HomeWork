import React, { useState } from 'react'
import "../inputs/form.css"
const Form = () => {
    let [inputsValue,setinputsValue]=useState(0)
  return (
  <>
  <form action="" className='inputs'>
    <input type="text" placeholder='Write price' onChange={(e)=>
    setinputsValue(e.target.value)
    }
/>
    <input type="text" placeholder='Write name' />
  </form>
  </>
  )
}

export default Form
