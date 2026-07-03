import React,{useEffect,useState} from 'react'
import './Signup.css'

function Signup() {
  //  javascript code runs here
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [username,setuserName]=useState('')
   const [image,setImage]=useState('')

    console.log(username)

  return (
    <div className='signup-page'>
    <div className='signup-card'>
      <div className='signup-header'>
         <span className='signup-brand'><a href='/'>Stratcom</a></span>
         <h2>Create Account</h2>
         <p>Create Account to Continue ...</p>
      </div>
      <form className='signup-form'>
      <div className='signup-form-group'>
             <label className='label'>Enter Your User Name</label>
             <input value={username} onChange={(e)=>setuserName(e.target.value)} type='text'  placeholder=' e.g Tom' /> 
           </div>
           <div className='signup-form-group'>
             <label className='label'>Enter Your Email Address</label>
             <input type='email'  placeholder=' e.g tom@gmail.com' /> 
           </div>
           <div className='signup-form-group'>
             <label className='label'>Enter Your Password</label>
             <input type='password'  placeholder='*******' /> 
           </div>
           <button className='signup-button'>Create Account</button>
      </form>
       <p className='signup-switch'>
         Already Have an Account? <a href='/login'>SignIn</a>
       </p>
    </div>
     </div>
  )
}

export default Signup
