import React, { useEffect, useState } from 'react'
import './Transaction.css'
import axios from 'axios'
import Navbar from '../../componects/Navbar/Navbar'

const Transaction = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const userFromLocatStroge = JSON.parse(localStorage.getItem('login' || "{}"))
    if (userFromLocatStroge?.email) {
      setUser(userFromLocatStroge);
    } else {
      alert("you are not loged in")
      window.location.href = '/login'
    }

  }, [])


  const [amount, setAmount] = useState();
  const [type, setType] = useState();
  const [category, setCategory] = useState();
  const [discription, setDiscription] = useState();
 const addtansaction =async () =>{
  const respose = await axios.post('/api/v1/transactions' ,{
    amount:amount,
    type:type,
    category:category,
    discription:discription
  })
  alert(respose?.data?.message) ;
  if(respose?.data?.sucess){
    window.location.href='/mytransactions'
  }
 }

  return (
    <div className='home-page'>
      <Navbar />




      <div className='singup-container '>
        <div className='singup-page'>
          <h1>Add Transaction</h1>

          <label htmlFor='amount' className='label'>Enter Amount: </label>
          <input type='number'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)

            }}
            id='amount' className='input-div' />

          <div>
            <input type='radio' name='type'
              checked={type === 'credit'}
              onClick={() => {
                setType('credit')
              }} id='credit' />
            <label className='female' htmlFor='credit'>Credit</label>

            <input type='radio' name='type'
              checked={type === 'debit'}
              onClick={() => {
                setType('debit')
              }} className='radio' id='debit' />
            <label className='female' htmlFor='debit'>Debit</label>
          </div>
          <div>
            <select value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }} className='select-tag'>
              <option>Please select categorie</option>
              <option value={'study'}>Study</option>
              <option value={'business'}>Business</option>
              <option value={'shopping'}>Shopping</option>
              <option value={'investment'}>Investment</option>
              <option value={'rent'}>Rent</option>
              <option value={'salary'}>Salary</option>
              <option value={'side-husle'}>Side-husle</option>
              <option value={'freelancing'}>Freelancing</option>
              <option value={'other'}>Other</option>
            </select>
          </div>
          <label htmlFor='discription' className='label'>Writer Description:</label>
          <input type='text' value={discription}
            onChange={(e) => {
              setDiscription(e.target.value)
            }}
            id='discription'  className='input-div discription'  />

          <button type='button' className='signup-btn' onClick={addtansaction}>Add Transaction Detail</button>
        </div>
      </div>

      </div>
   


  )
}

export default Transaction
