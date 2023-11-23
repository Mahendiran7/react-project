import React, { useEffect, useState } from "react";
import product from '../images/542045b31b3247cd.webp'
import axios from "axios";
import toast from "react-hot-toast";

function Products({setChange}) {
  const [products,setProducts]= useState([])

 useEffect(()=>{
  const fetchProducts =()=>{
    axios.get('https://653bc4cad5d6790f5ec767c3.mockapi.io/products').then((res)=>{
     setProducts(res.data);
    }).catch((error)=>{
      console.log(error);
    })
  }
  fetchProducts()
 },[])

 const addToCart =async(list)=>{
  const res = await axios.post('https://653bc4cad5d6790f5ec767c3.mockapi.io/cart',list)
  if(res.status===201){
    toast.success("Added To cart")
    setChange(true)
  }
  if(res.status!==201){
    toast.error("Something went Wrong")
  }
 }
 
  return (
    <div className="container my-5">
      <div className="row">
        {
          products.map((list)=>{
            return  <div className="col-3 ">
          <div class="card shadow-lg bg-body-tertiary rounded" style={{width: "18rem;"}}>
            <div className="position-relative">
               <img src={list.image} class="card-img-top" alt="..." />
               {
                list.bestSeller && <div className="best-seller">
                Best Seller
                </div>
               }
               
            </div>
           
            <div class="card-body">
              <h5 class="card-title">{list.name}</h5>
              <div><span className="bg-success text-white px-2 rounded">{list.rating}</span></div>
              <p>${list.offerPrice}</p>
              <p><del>${list.price}</del></p>
              <p class="card-text">
               {list.description}
              </p>
              <button className="btn btn-sm btn-outline-primary" onClick={()=>addToCart(list)}>Add To cart +</button>
            </div>
          </div>
        </div>
          })
        }
        
      
      </div>
    </div>
  );
}

export default Products;
