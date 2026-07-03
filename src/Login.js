import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth,signInWithEmailAndPassword,updateProfile} from './firebase'
import "./Login.css"

function Login() {
   
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [username,setuserName]=useState('')
  const[error,SetError]=useState('')
  const [image,setImage]=useState('')
  const[loading,setLoading]=useState(false)
  const navigate =useNavigate()

   // function to login a user
     const loginUser = async(e)=>{
       e.preventDefault()
       SetError('')
       setLoading(true)
       try{
           await signInWithEmailAndPassword(auth,email,password)
           navigate('/dashboard')
       }catch(err){
        switch(err.code){
            case 'auth/user-not-found':
             SetError('User Not Found')
             break;
            case 'auth/invalid-email':
             SetError('Invalid email in Use')
             break;
             case 'auth/weak-password':
               SetError('Password is too Weak , use a stronger password')
               break;
               default:
                 SetError('Login Failed, Try Again')
        }
     }finally{
      setLoading(false)
    }

     }


  return (
    <div className='login-page'>
          <div className='login-card'>
            <div className='login-header'>
               <span className='login-brand'><a href='/'>Stratcom</a></span>
               <h2>Welcome Back</h2>
               <p>Sign In to Continue ...</p>
            </div>
            <form className='login-form'>
                 <div className='login-form-group'>
                   <label className='label'>Enter Your Email Address</label>
                   <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email'  placeholder=' e.g tom@gmail.com' /> 
                 </div>
                 <div className='login-form-group'>
                   <label className='label'>Enter Your Password</label>
                   <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password'  placeholder='*******' /> 
                 </div>
                 <button onClick={loginUser} className='login-button'>SignIn</button>
            </form>
             <p className='error'>{error}</p>
             <p className='login-switch'>
               Don't Have an Account? <a href='/signup'>Signup</a>
             </p>
          </div>
    </div>
  )
}

export default Login
