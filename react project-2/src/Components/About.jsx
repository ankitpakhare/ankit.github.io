import React from 'react'
import item2 from '../assets/about.jpg'
import item1 from '../assets/about-1.jpg'


const About = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 about">
                    <img src={item2} alt="" style={{height:'600px', width:'400px', objectFit:'cover'}}  />
                </div>

                <div className="col-12 col-md-6 col-lg-4 about-">
                     <img src={item1} alt="" style={{height:'600px', width:'400px', objectFit:'cover'}} />
                </div>

                <div className="col-12 col-md-6 col-lg-4 ">
                      <h1   className='p-3 display-4'style={{fontFamily:'ui-sans-serif' }}>About</h1>
                      <h4  className='ps-3 display-5'>Feliociano restaurant</h4>
                      <p className='p-3 fs-5'>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem officia aliquam minus delectus a beatae adipisci, soluta labore est asperiores. Quam quia iure excepturi sit ipsa recusandae modi architecto perspiciatis.</p>
                      <p className='p-3 fs-5'>Mon-Fri <b>8AM-11PM</b></p>

                      <h2  className='ps-3'>+91 749-256-3488</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
