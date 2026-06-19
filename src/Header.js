import React from 'react'
import './Header.css'

function Header() {
  return (
      <header className='header'>
      <div className='container headercontainer'>
           <div className='logo'>
             <span className='logotext'>Stratcom</span>
           </div>
      </div>
      <nav className='navmenu'>
         <ul className='navlist'>
             <li className='navitem'><a className='navlink' href='/'>Home</a> </li>
             <li className='navitem'><a className='navlink' href='/'>Aboutus</a> </li>
             <li className='navitem'><a className='navlink' href='/'>Services</a> </li>
             <li className='navitem'><a className='navlink' href='/'>Login</a> </li>
             <li className='navitem'><a className='navlink' href='/'>SignUp</a> </li>
         </ul>
      </nav>
      </header>
  )
}

export default Header
