import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Login = () => {
  const [email,setemail] = useState();
  const [password,setPassword]= useState(); 

  const login = async()=>{
    if(!email){
      alert('email is required');
      return
    }
    if(!password){
      alert("password is required")
      return
    }
    const response =  await axios.post('/api/v1/login',{
      email:email,
      password:password
    })
    alert(response?.data?.message);
    if(response?.data?.sucess){
      localStorage.setItem('login' , JSON.stringify(response?.data?.data));
      Window.location.href='/'
    }

  }

  useEffect(()=>{
    const loadData = JSON.parse(localStorage.getItem('login' || '{}'))
    if(loadData?.email){
      alert('you are already loged in');
      window.location.href='/'
    }
  },[])
  return (
    <div>
      <h1>login</h1>
      <label htmlFor='email'>Enter Email: </label>
      <input type='text' 
      value={email}
      onChange={(e)=>{setemail(e.target.value)}} 
      id='email'
      />

      <label htmlFor='password'>Enter Password:</label>
      <input type='text' 
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}} 
      id='password' />

      <button type='button' onClick={login}>login</button>
    </div>
  )
}

export default Login
