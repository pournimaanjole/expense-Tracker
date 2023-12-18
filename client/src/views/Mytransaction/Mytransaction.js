import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const Mytransaction = () => {
    const [user,setUser] = useState({})
    useEffect(()=>{
        const getUserfromLocalStronge= JSON.parse(localStorage.getItem('login' || "{}"))
       if(getUserfromLocalStronge?.email){
        setUser(getUserfromLocalStronge);
       }
       else{
        alert("you are not login")
        window.location.href='/login'
       }

    },[])
  return (
    <div>
      
    </div>
  )
}

export default Mytransaction
