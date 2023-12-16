import React, { useEffect, useState } from 'react'
import './Singup.css'

import axios from 'axios'

const Singup = () => {

    const [name,setName]= useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [phoneNo,setPhoneNo] = useState()
    const [gender,setgender] = useState("female");

    const Singup = async () =>{
        if(!name){
            alert("name is required");
            return
        }
        if(!email){
            alert("email is required");
            return
        }
        if(!password){
            alert("password is required");
            return
        }
        if(!phoneNo){
            alert("phone no is required");
            return
        }
        const response = await axios.post('/api/v1/signups',{
            name:name,
            email:email,
            password:password,
            phoneNo:phoneNo,
            gender:gender
        })
        alert(response?.data?.message)
        if(response?.data?.sucess){
           window.location.href='/login'
        }
        
    }

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('login' || '{}'))
        if(user?.email){
            alert("you are already loged in")
            window.location.href='/'
        }
    },[])
  return (
    <div>
      
      <div>
        <label htmlFor='name'>Your Name: </label>
        <input type='text'
        value={name}
        id='name'
         onChange={(e)=>{
setName(e.target.value)
        }} />

        <label htmlFor='email'>Your Email: </label>
        <input type='text'
         value={email}
         id='email'
          onChange={(e)=>{
            setEmail(e.target.value)
        }} />

        <label htmlFor='password'>Enter Password:</label>
        <input type='text' 
        value={password} 
        id='password' 
        onChange={(e)=>{
            setPassword(e.target.value)
        }} />

        <label htmlFor='phoneno'>Enter Mobile No: </label>
        <input type='text'
        value={phoneNo} 
        id='phoneno' 
        onChange={(e) =>{
            setPhoneNo(e.target.value)
        }} />

<div>
<input type='radio'
         name='gender' 
         id='male' 
         checked={gender=="male"}
         onClick={()=>{setgender("male")}}
         />
         <label htmlFor='male'>Male</label>

         <input type='radio' 
         name='gender' 
         id='female'
         checked={gender=="female"}

         onClick={()=>{setgender("female")}}
         
         />
         <label htmlFor='female'>Female</label>
</div>
        

        

         <button  type='button' onClick={Singup}>Signup</button>
      </div>
    </div>
  )
}

export default Singup
