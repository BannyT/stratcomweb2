import React from 'react'
import "./Aboutus.css"

function Aboutus() {
  return (
    <div className='about-section' >
         <div className='about-container'>
              <div className='about-header'>
                   <span className='about-badge'>Our Story</span>
                   <h2 className='about-title'>About StratCom</h2>
                   <p className='subtitle'>
                      Empowering the next generation of Tech Professionals in Uganda
                   </p>
              </div>
              <div className='about-content'>
                  <div className='abouttext'>
                    <h3>Who We Are </h3>
                    <p>
                      Founded in 2018, <strong>StratCom</strong> has grown into a premier training and certification hub for 
                      aspiring IT professionals. We bridge the gap between theoretical knowledge and real-world application, 
                      offering hands-on bootcamps, networking courses, hardware repair training, and industry-recognized 
                      Cisco certifications.
                    </p>
                  <p>
                    Our mission is simple: to equip learners with the skills they need to thrive in a digital-first economy. 
                      Whether you're starting from scratch or advancing your career, StratCom provides the roadmap to success.
                  </p>

                  </div>
              </div>

         </div>
    </div>
  )
}

export default Aboutus
