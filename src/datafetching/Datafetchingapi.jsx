import { useEffect, useState } from "react"
import React from 'react'

const Datafetchingapi = () => {

    const [products , setProducts] = useState([]);

    const fetchdata = async()=>{
      
        const response = await fetch ("https://fakestoreapi.com/products");
        const jasondata = await response.json();

        setProducts(jasondata);
    }

    useEffect (()=>{
      fetchdata();
    } ,[])
  return (
    <div>
      
       {
        products.map((item)=>(
        <div key = {item.id} style={{ }} >
            <img src={item.image} alt={item.title} style={{width :"150px", height :"150px"}} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
           
            <p>{item.discription}</p>
        </div>
        ))
       }
      </div>
   
  )
}

export default Datafetchingapi
