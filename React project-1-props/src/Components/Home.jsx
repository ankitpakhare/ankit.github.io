import React from 'react'
import Cards from './Cards'
import Nav from './Nav'
import Hero from './Hero'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
           <Nav/>
           <Hero/>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 "></div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container item">
                    <div className="row my-5 " >
                        <div className="col-12 col-md-6 col-lg-4 sec3">
                            <img src="src\assets\images\items1.jpg" alt="" className='' />
                            <h3 className='fs-2 text-white fw-bold'>Mens Fashion</h3>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 sec3 ">
                            <img src="src\assets\images\items2.jpg" alt="" className='' />
                            <h3 className='fs-2 text-white fw-bold'>Mens Fashion</h3>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 sec3 ">
                            <img src="src\assets\images\items3.jpg" alt="" className='' />
                            <h3 className='fs-2 text-white fw-bold'>Mens Fashion</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Cards />

            <section className=' p-5 m-5'>
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 col-md-6 col-lg-3" >
                            <i class="fa-regular fa-truck fs-1 ps-4 ms-5 mb-3"></i>
                            <h5>Fast & Free Delivary</h5>
                            <p>Free Delivery an all Orders</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3" >
                            <i class="fa-solid fa-credit-card fs-1 ps-4 ms-5 mb-3"></i>
                            <h5>Secure Payment</h5>
                            <p>Free Delivery an all Orders</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" >
                            <i class="fa-solid fa-money-bill-transfer fs-1 ps-4 ms-5 mb-3"></i>
                            <h5>Money Back Gurentee</h5>
                            <p>Free Delivery an all Orders</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" >
                            <i class="fa-regular fa-clock fs-1 ps-2 ms-5 mb-3"></i>
                            <h5>Online Support</h5>
                            <p>Free Delivery an all Orders</p>
                        </div>
                    </div>
                </div>

            </section>
            <Contact/>

            <footer className='bg-dark text-white pt-5 pb-5 '>
                <div className="container pt-5 ">
                    <div className="row foot">
                        <div className="col-12 col-md-4 col-lg-3 ">
                            <h5>Subscribe Newsletter</h5>
                            <p>Subscribe newsletter to get 5% on all products.</p>
                        </div>

                        <div className="col-12 col-md-4 col-lg-6">
                            <input type="text" placeholder='Enter Your Email ' className='bg-white p-2 w-75' />
                            <button className='btn btn-danger rounded-0 pt-2 pb-2 ' >Subscribe</button>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 fs-2 ">
                            <i class="fa-brands fa-facebook "></i>
                            <i class="fa-brands fa-instagram mx-4 ms-5"></i>
                            <i class="fa-brands fa-youtube"></i>

                        </div>

                    </div>
                    <br /><hr style={{ color: 'white' }} />

                    <div className="row pt-5 pb-5 mt-5">
                        <div className="col-12 col-md-4 col-lg-4">
                            <img src="src\assets\images\logo2_footer.png" alt="" />
                        </div>
                        <div className="col">
                            <div className="row ">
                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Shop Men</h5>
                                  <a href="" className='text-white text-decoration-none lh-lg '>Clothing Fashion</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Winter</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Summer</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Formal</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Casual</a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Shop Women</h5>
                                  <a href="" className='text-white text-decoration-none lh-lg '>Clothing Fashion</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Winter</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Summer</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Formal</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Casual</a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-3 my-3">
                                   <h5 className='mb-4 text-white'>Baby Collection</h5>
                                  <a href="" className='text-white text-decoration-none lh-lg '>Clothing Fashion</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Winter</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Summer</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Formal</a><br />
                                  <a href="" className='text-white text-decoration-none lh-lg '>Casual</a>
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

                        </div>
                    </div>
                    <br /><hr />

                    <p className='text-center'>Copyright ©2025 All rights reserved | This template is made with  by <span className='text-danger'>Ankit Pakhare</span></p>
                </div>
            </footer>





        </div>
    )
}

export default Home
