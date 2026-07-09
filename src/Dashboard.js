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
           <div className='activities-section'>
               <div className='activities-header'>
                           <h3 className='activities-header-title'>Your Log Book</h3>
                           <button className='btn-export'>Export PDF</button>
               </div>
           </div>
           <div className='activities-grid'>
                      <div className='activity-card'>
                              <div className='activity-content'>
                                <h4>Router Configuration</h4>
                                <span className='act-subtitle'>Router Configuration in PAcket Tracer </span>
                                <p className='act-description'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with 
                                
                                a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </p>
                                 <small className='act-date'>9th/July/2026</small>  
                              </div>
                              <div className='activity-actions'>
                                 <button className='btn-edit'> Edit Activity</button>
                                 <button className='btn-delete'>Delete Activity</button>
                              </div>
                      </div>
               </div>
       </div>
       
    </div>
  )
}

export default Dashboard
