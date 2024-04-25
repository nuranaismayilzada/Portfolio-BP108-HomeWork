import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './components/Container';
import Input from './components/Input';
import Card  from './components/Card';
function App() {

  {document.body.style.backgroundColor = '#141C2F'}
  return (
    <div>
      <Container/>
      <Input/>
      <Card/>
    </div>
  )
}

export default App
