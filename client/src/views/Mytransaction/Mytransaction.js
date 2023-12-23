import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import './Mytransaction.css'
import axios from 'axios'
import Navbar from '../../componects/Navbar/Navbar'
import img2 from './../Home/money1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
const Mytransaction = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const getUserfromLocalStronge = JSON.parse(localStorage.getItem('login' || "{}"))
    if (getUserfromLocalStronge?.email) {
      setUser(getUserfromLocalStronge);
    }
    else {
      alert("you are not login")
      window.location.href = '/login'
    }

  }, [])


  const [transactions, setTransactions] = useState([])
  const loadTransactions = async () => {
    const response = await axios.get('/api/v1/transactions');
    setTransactions(response?.data?.data)
  }
  useEffect(() => {
    loadTransactions();
  }, [])

const deletedata = async (_id) =>{
const response  = await axios.delete(`/api/v1/transactions/${_id}`)
if(response?.data?.sucess){
  alert('data delete succesfully') 
  loadTransactions();
}
}
 const updatedata = (_id) =>{

 }
 

  return (
    <div className='home-page'>
      <Navbar />
      <div className='home-container'>
        <div className='right-div'>
          <img src={img2} className='img-height' />
        </div>


        <div className='left-div'>
          <div className='showing-card'>
            {
              transactions?.map((data, index) => {
                const {_id, amount, discription, category, type, createdAt, updatedAt } = data



                return (<>

                  <div key={index} className='mytransaction'>



                    <span className='reason'>Amount: <span className='amount'>{amount}</span> </span>
                    <span className='type'>{type == 'credit' ? <span><span className='plus'>➕</span>{type}</span> : <span>➖{type}</span>} </span>

                    <span className='reason'>Reason For {type}: <span className='amount'>{category}</span> </span>
                    <span className='reason'>Description: <span className='amount'>{discription}</span> </span>

    <div className='icon'><div><span onClick={()=>{
      deletedata(_id);
    }}><FontAwesomeIcon icon={faTrash} /></span></div><div><span onClick={()=>{updatedata(_id)}}><FontAwesomeIcon icon={faPenToSquare} /></span></div></div>
                  </div>
                </>)

              })
            }
          </div>

        </div>


      </div>
    </div>
  )
}

export default Mytransaction
