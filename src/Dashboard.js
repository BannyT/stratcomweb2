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
           <div className='form-card'>
                 <h3> Add New Activity</h3>
                 <form>
                     <div className='form-group'>
                         <label htmlFor='title'> Title</label>
                         <input 
                             type='text'
                             placeholder='e.g Configuring Router'
                           />
                     </div>
                     <div className='form-group'>
                         <label htmlFor='subtitle'> subtitle</label>
                         <input 
                             type='text'
                             placeholder='e.g Configuring Router'
                           />
                     </div>

                     <div className='form-group'>
                         <label htmlFor='description'> Description</label>
                         <textarea
                            rows='3' 
                             type='text'
                             placeholder='e.g Configuring Router'
                           />
                     </div>
                     <div className='form-actions'>
                         <button className='btn-primary'>Add Activity</button>
                         <button className='btn-secondary'>Cancel</button>
                     </div>
                 </form>
           </div>

       </div>
       
    </div>
  )
}

export default Dashboard
