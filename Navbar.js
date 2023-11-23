import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({change}) {
  const location= useLocation()
  console.log(location);
  const [cartData,setCartData]= useState([])
  const fetchCartData = ()=>{
      axios.get('https://653bc4cad5d6790f5ec767c3.mockapi.io/cart').then((res)=>{
          setCartData(res.data)
      }).catch((error)=>{
          console.log(error);
      })
  }

  useEffect(()=>{
      fetchCartData()
  },[change])
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
   
   
  </div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       <Link to={'/cart'}>
       <li class="nav-item">
          <a class="nav-link">
            <div className='position-relative px-2'>
            <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
              <div className='position-absolute top-0 end-0'>
                <span className='rounded-pill bg-danger px-1'>{cartData.length}</span>
              </div>
            </div>
          </a>
        </li>
       </Link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
     
    </div>
</nav>
  )
}

export default Navbar