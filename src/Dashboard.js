import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
       <div className='dashboard-topbar'>
           <div className='topbar-left'>
             <span className='topbar-logo'>StratCom</span>
             <span className='topbar-greeting'> Hell0, Tummusiime</span>
           </div>
           <button className='topbar-logout'>LogOut</button>
       </div>
       <div className='dashboard-container'>
           <div className='dashboard-header'>
                 <span className='dashboard-badge'> Intership LogBook</span>
                 <h1 className='high-light'>My Activities</h1>
                 <p>Track Your Intership Activities</p>
           </div>

       </div>
       
    </div>
  )
}

export default Dashboard
