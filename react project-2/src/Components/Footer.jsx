import React from 'react'

const Footer = () => {
  return (
    <div>
              <footer className='bg-primary text-white pt-5 pb-5 '>
                <div className="container pt-5 ">
                    <div className="row foot">
                        <div className="col-12 col-md-4 col-lg-3 ">
                            <h5>Subscribe Newsletter</h5>
                            <p>Subscribe newsletter to get 5% on all products.</p>
                        </div>

                        <div className="col-12 col-md-4 col-lg-6">
                            <input type="text" placeholder='Enter Your Email ' className='bg-white p-2 w-75' />
                            <button className='btn btn-warning rounded-0 pt-2 pb-2 ' >Subscribe</button>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 fs-2 ">
                            <i class="fa-brands fa-facebook "></i>
                            <i class="fa-brands fa-instagram mx-4 ms-5"></i>
                            <i class="fa-brands fa-youtube"></i>

                        </div>

                    </div>
                    <br /><hr  />

                    <div className="row pt-5 pb-5 mt-5">
                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Taste.it</h5>
                                   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                                 
                                </div>

                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Weekends Off</h5>
                                  <a href="" className='text-white text-decoration-none lh-lg '>Sunday</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '></a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Saturday</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '></a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '></a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Open Days</h5>
                                  <a href="" className='text-white text-decoration-none lh-lg '>Monday</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Tuesday</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Wednesday</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Thrusday</a>
                                  <a href="" className='text-white text-decoration-none lh-lg '>friday</a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Quick Links</h5>
                                  <a href="" className='text-white text-decoration-none lh-lg '>Track Your Oeder</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Support</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>FAQ</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Carrier</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>About</a> <br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Contact Us</a>
                                </div>

                                
                            

                      
                    </div>
                    <br /><hr />

                    <p className='text-center'>Copyright ©2025 All rights reserved | This template is made with  by <span className='text-warning'>Ankit Pakhare</span></p>
                </div>
            </footer>
      
    </div>
  )
}

export default Footer
