import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContext from "./context/GetProducts.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MainContext>
  
)
