import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='login-page'>
          <div className='login-card'>
            <div className='login-header'>
               <span className='login-brand'>Stratcom</span>
               <h2>Welcome Back</h2>
               <p>Sign In to Continue ...</p>
            </div>
            <form className='login-form'>
                 <div className='login-form-group'>
                   <label className='label'>Enter Your Email Address</label>
                   <input type='email'  placeholder=' e.g tom@gmail.com' /> 
                 </div>
                 <div className='login-form-group'>
                   <label className='label'>Enter Your Password</label>
                   <input type='password'  placeholder='*******' /> 
                 </div>
                 <button className='login-button'>SignIn</button>
            </form>
             <p className='login-switch'>
               Don't Have an Account? <a href='/signup'>Signup</a>
             </p>
          </div>
    </div>
  )
}

export default Login
