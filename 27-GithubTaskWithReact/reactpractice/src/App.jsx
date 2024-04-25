import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gallery from './components/Gallery'
import TodoList from './components/ToDoList'
import Bio from './components/Bio'
import Avatar from './components/Avatar'
import './App.css'

function App() {

  return (
    <>
      
        <Gallery/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <TodoList/>
        <Bio/>
        <Avatar/>
   
    </>
  )
}

export default App
