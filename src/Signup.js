import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth,createUserWithEmailAndPassword} from '../firebase'
import './Signup.css'

function Signup() {
  //  javascript code runs here
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [username,setuserName]=useState('')
   const[error,SetError]=useState('')
   const [image,setImage]=useState('')
   const[loading,setLoading]=useState(false)

   const navigate =useNavigate()

    // function to create user 
      const createUser = async(e)=>{
          e.preventDefault()
          SetError('')
          if(password.length <6){
            SetError('Password Must be atleast 6 Characters')
            return;
          }
          setLoading(true)
          try {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user =userCredential.user;
            await updateProfile(user,{displayName:username})
            alert('User has been Created Sucessfully');
            navigate('/')
          }catch(err){
             switch(err.code){
                 case 'auth/email-already-in-use':
                  SetError('Email Already in Use')
                  break;
                 case 'auth/invalid-email':
                  SetError('Invalid email in Use')
                  break;
                  case 'auth/weak-password':
                    SetError('Password is too Weak , use a stronger password')
                    break;
                    default:
                      SetError('Signup Failed, Try Again')
             }
          }finally{
            setLoading(false)
          }

      }

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
             <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email'  placeholder=' e.g tom@gmail.com' /> 
           </div>
           <div className='signup-form-group'>
             <label className='label'>Enter Your Password</label>
             <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password'  placeholder='*******' /> 
           </div>
           <button onClick={createUser}   className='signup-button'>Create Account</button>
      </form>
       <p className='signup-switch'>
         Already Have an Account? <a href='/login'>SignIn</a>
       </p>
    </div>
     </div>
  )

  function newFunction() {
    console.log('')
  }
}

export default Signup
