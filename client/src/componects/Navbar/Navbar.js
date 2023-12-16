import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [user,setUser] = useState({})
  useEffect(()=>{
    const userFromLocatStroge = JSON.parse(localStorage.getItem('login' || "{}"))
    setUser(userFromLocatStroge);
  },[])
  return (
    <div>
      
     <div className='navbar'>

      <div><Link to='/'> Home</Link> </div>
      
     <div> <Link to='/transaction'> transaction</Link></div>
     <div><Link to='/login'> login</Link></div>
     <div> <Link to='/singup'> singup</Link></div>
      
     
   Hello{user?.name || 'user'}
     </div>
      
    </div>
  )
}

export default Navbar
