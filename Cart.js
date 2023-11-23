import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Cart({setChange}) {
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
    },[])

    const removeItem = (id) =>{
      axios.delete(`https://653bc4cad5d6790f5ec767c3.mockapi.io/cart/${id}`).then((res)=>{
        toast.success("Removed Successfully")
        setChange(false)
        fetchCartData()
      }).catch((err)=>{
        console.log(err);
      })
    }

    const totalCost = cartData.reduce((prev,curr)=>prev+parseInt(curr.offerPrice),0)
    const discount = (totalCost * 0.10).toFixed(2)
    const cost = totalCost-discount
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ol class="list-group list-group-numbered">
            {
                cartData.map((list)=>{
                    return <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{list.name}</div>
                      <div><del>${list.price}</del></div>
                      <div>${list.offerPrice}</div>
                     {list.description}
                    </div>
                    {
                        list.bestSeller &&<span class="badge bg-primary rounded-pill">Bestseller</span>
                    }
                    <div className="mx-2 rounded-pill btn btn-sm btn-danger" onClick={()=>removeItem(list.id)}>
                      X
                    </div>
                    
                  </li>
                })
            }
            
            
          </ol>
        </div>
        <div className="col-4">
        <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
  SubTotal
    <span class="badge bg-primary rounded-pill">${totalCost}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Discount 10%
    <span class="badge bg-primary rounded-pill">${discount}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Total cost
    <span class="badge bg-primary rounded-pill">${cost}</span>
  </li>
</ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
