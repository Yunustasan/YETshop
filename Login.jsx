import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Login({handleLogin,user}) {
  if(user?.id){
    return <Navigate to="/"/>
  }
  return (
   <>
    <div className='container-fluid w-50 p-5 h-100'>
        <form className='form-control'>
          <h1 className='w-100 text-center' style={{fontSize:"80px"}}><i className="bi bi-person-circle"></i></h1>
          <h4 className='w-100 text-center'>Merhaba,</h4>
          <h2 className='w-100 text-center'>Yunus Emre</h2>
          <div className="text-center mt-3 p-2">
              <button type="submit" className="btn btn-dark mx-0" onClick={handleLogin}>Giriş Yap</button>
          </div>
         
        </form>
    </div>
   </>
  )
}