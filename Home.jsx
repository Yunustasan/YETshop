import React from 'react'
import Products from '../Products/Products'

export default function Home({user}) {
  return (
    <>
        {<Products user={user}/>}
    </>
  )
}