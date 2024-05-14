import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Add from './pages/Add';
import Home from './pages/Home';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Basket from './pages/Basket';

function App() {

  return (
    <>
    <Header/>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/basket' element={<Basket/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
