import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import { useNavigate } from 'react-router-dom'


export default function App() {
  const [user,setUser]=useState(null)
  const navigate=useNavigate()
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user"))??null)
  },[])
  const handleLogin=()=>{
    const user={id:1,name:"Yunus Emre"}
    setUser(user)
    localStorage.setItem("user",JSON.stringify(user))
    navigate("/")
  }
  const handleLogout=()=>{
      localStorage.removeItem("user")
      setUser(null)
  }
  return (
  <>
    <Navbar user={user} handleLogout={handleLogout}/>
    <div className="container-fluid mx-0">
      <div className="row py-5 w-100 px-1">
        <SiteRoutes handleLogin={handleLogin} user={user}/>
      </div>
    </div>
  </>
  )
}