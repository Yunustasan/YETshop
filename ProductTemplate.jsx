import React from 'react'
import Category from './Category'
import { Outlet } from 'react-router-dom'

export default function ProductTemplate() {
  return (
    <>
      <div className="col col-lg-2">
        <Category/>

      </div>
      <div className="col-md-10">
        <Outlet/>
      </div>
    </>
    
  )
}