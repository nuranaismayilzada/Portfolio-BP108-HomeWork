import React from 'react'
import "./increment.css"
const Increment = ({ count, setCount }) => {
    const inc = () => {
        if (!isNaN(count)) {
            setCount(prevValue => parseInt(prevValue, 10) + 1);
        }
    }
    return (
        <div>
            <button className='glowing-btn' onClick={inc}>Inc</button>
        </div>
    )
}

export default Increment
