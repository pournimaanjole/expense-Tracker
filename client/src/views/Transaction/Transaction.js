import React, { useEffect, useState } from 'react'
import './Transaction.css'
import axios from 'axios'

const Transaction = () => {
  const [user,setUser] = useState({})
  useEffect(()=>{
    const userFromLocatStroge = JSON.parse(localStorage.getItem('login' || "{}"))
    if(userFromLocatStroge?.email){
      setUser(userFromLocatStroge);
    }else{
      alert("you are not loged in")
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
      {
        transactions?.map((data,index)=>{
            const {amount,discription,category,type,createdAt,updatedAt}= data
            return(<>
            <div key={index}>
                 {amount}
                 {discription}
            </div>
            </>)

        })
      }
    </div>
  )
}

export default Transaction
