import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

export default function Categories({user}) {
    const {cat}=useParams()
    const[categoryProducts,setProducts]=useState([])
    useEffect(()=>{
       try{
        if(cat.trim().length>0){
            fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(res=>setProducts(res))
            .catch(err=>console.log(err))
           }else{
            fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(res=>setProducts(res))
           }
       }catch{
        fetch('https://fakestoreapi.com/products?limit=10')
        .then(res=>res.json())
        .then(res=>setProducts(res))
       }
    },[cat])

    function isCategoryName(){
        try{
            if(cat.trim().length>0){
                return <h6 className='py-3'>"<strong>{cat}</strong>" Kategorisindeki Ürünler</h6>
            }else {
                return null
            }
        }catch{return null}
         
    }

  return (
    <>
        {isCategoryName()}
        <div className="row row-cols-sm-3 row-cols-md-4">
            {categoryProducts.map((item)=><ProductCard key={item.id} user={user} item={item} />)}
        </div>
    </>
    )
}