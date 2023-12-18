import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import './Mytransaction.css'
import axios from 'axios'

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


    const [transactions,setTransactions] = useState([])
    const loadTransactions =async () =>{
        const response = await axios.get('/api/v1/transactions');
        setTransactions(response?.data?.data)
    }
    useEffect(()=>{
        loadTransactions();
    },[])
  return (
    <div>
       {/* {
        transactions?.map((data,index)=>{
            const {amount,discription,category,type,createdAt,updatedAt}= data
            return(<>
            <div key={index}>
                 {amount}
                 {discription}
            </div>
            </>)

        })
      } */}
    </div>
  )
}

export default Mytransaction
