import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home';
import Users from './pages/Users';
import Products from './pages/Products';
import Post from './pages/Post';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </div>


  )
}

export default App
