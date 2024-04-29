import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/Counter'
import CounterText from './components/CounterText'

function App() {

  return (
    <>
    <CounterText/>
      <Counter/>
    </>
  )
}

export default App

