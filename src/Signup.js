import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup-page'>
    <div className='singup-card'>
      <div className='signup-header'>
         <span className='signup-brand'>Stratcom</span>
         <h2>Create Account</h2>
         <p>Create Account to Continue ...</p>
      </div>
      <form className='signup-form'>
      <div className='singup-form-group'>
             <label className='label'>Enter Your User Name</label>
             <input type='text'  placeholder=' e.g Tom' /> 
           </div>
           <div className='singup-form-group'>
             <label className='label'>Enter Your Email Address</label>
             <input type='email'  placeholder=' e.g tom@gmail.com' /> 
           </div>
           <div className='signup-form-group'>
             <label className='label'>Enter Your Password</label>
             <input type='password'  placeholder='*******' /> 
           </div>
           <button className='signup-button'>SignIn</button>
      </form>
       <p className='signup-switch'>
         Already Have an Account? <a href='/login'>SignIn</a>
       </p>
    </div>
     </div>
  )
}

export default Signup
