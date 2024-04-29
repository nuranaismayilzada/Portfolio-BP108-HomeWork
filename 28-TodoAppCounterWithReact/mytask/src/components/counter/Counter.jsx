import React,{useState} from 'react'
import Increment from './components/Increment'
import Value from './components/Value'
import Decrement from './components/Decrement'
import "./Counter.css"
const Counter = () => {
  let [count,setCount]=useState('');
  const handleChange = (event) => {
    setCount(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className='counter'>
      <Increment count={count} setCount={setCount}/>
      <Value count={count} handleChange={handleChange}/>
      <Decrement count={count} setCount={setCount}/>
    </div>
  )
}

export default Counter
