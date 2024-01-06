import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Category({user}) {
  const[categories,setCategories]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=>setCategories(res))
  },[])
  const[cat_display,setCatDisplay]=useState("none")
  const[cat_arrow,setCatArrow]=useState(<i className="bi bi-caret-down-fill"></i>)
  const changeCatDisplay=()=>{
      if(cat_display!="none"){
        setCatDisplay("none")
        setCatArrow(<i className="bi bi-caret-down-fill"></i>)
      }else{
        setCatDisplay("block")
        setCatArrow(<i className="bi bi-caret-up-fill"></i>)
      }
  }
  return (
   <>
    <div className='row'>
      <div className="list-group" style={{userSelect:'none'}}>
      <h6 className='list-group-item list-group-item-action m-0' style={{cursor:"pointer"}} onClick={changeCatDisplay}>Kategoriler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cat_arrow}</h6>
        <div id="category-area" style={{display:cat_display}}>
          <Link to="/urunler" className="list-group-item list-group-item-action">All</Link>
          {categories.map((cat,index)=>
          <Link key={index}
          to={`/urunler/category/${cat}`} className="list-group-item list-group-item-action" elements={<Category/>}>{cat}</Link>
          )}
        </div>
      </div>
    </div>
   </>
  )
}