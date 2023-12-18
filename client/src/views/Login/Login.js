import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import Navbar from '../../componects/Navbar/Navbar';
const Login = () => {
  const [email, setemail] = useState();
  const [password, setPassword] = useState();

  const login = async () => {
    if (!email) {
      alert('email is required');
      return
    }
    if (!password) {
      alert("password is required")
      return
    }
    try {
      const response = await axios.post('/api/v1/login', {
        email: email,
        password: password
      })
      alert(response?.data?.message);
      if (response?.data?.sucess === true) {
        localStorage.setItem('login', JSON.stringify(response?.data?.data));
        window.location.href = '/'
      }
    } catch (err) {
      console.log(err.message)
    }

  }

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem('login' || '{}'))
    if (loadData?.email) {
      alert('you are already loged in');
      window.location.href = '/'
    }
  }, [])
  return (
    <div className='login-page'>
      <Navbar/>
      <div className='login-container'>
      <div className='login-div'>
        <h1>login</h1>
        <label htmlFor='email' className='label'>Enter Email: </label>
        <input type='text'
          value={email}
          onChange={(e) => { setemail(e.target.value) }}
          id='email'
          className='input-box'
        />

        <label htmlFor='password' className='label'>Enter Password:</label>
        <input type='text'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          id='password' 
          className='input-box'
          />

        <button type='button' onClick={login} className='btn'>login</button>
        <span>don't have an account ?<Link to='/singup' className='link'>create a account</Link></span>
      </div>
      </div>
    </div>
  )
}

export default Login
