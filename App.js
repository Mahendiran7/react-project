
import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Slides from './Components/Slides';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [change,setChange]=useState(false)
  return (
    <BrowserRouter>
    <Navbar change={change}/>
     <Slides/>
    <Routes>
      <Route path='/' element={<Products setChange={setChange}/>}/>
      <Route path='/cart' element={<Cart setChange={setChange}/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
   
     
     
   
  );
}

export default App;
