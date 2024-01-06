import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'

function Products({user}) {
    const[last10Products,setLast10Products]=useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products?limit=10')
              .then(res=>res.json())
              .then(res=>setLast10Products(res))
    })
    return (
        <>
            <div className='row row-cols-sm-3 row-cols-md-4'>
                {last10Products.map(product => <ProductCard key={product.id} item={product} user={user}/>)}
            </div>
        </>
    )
}

export default Products