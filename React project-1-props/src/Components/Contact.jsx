import React from 'react'

const Contact = () => {
    return (
        <div style={{ height: '80vh' }} className='bg-light'>
            <div style={{ padding: '15px' }}>
                <h2 className='text-center '>Contact</h2>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8 pt-5">
                                        <h2>Get in Touch</h2>

                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" placeholder='Enter Messgae'></textarea>
                        </div>
                        <div class="input-group mb-3 mt-4">
                            <input type="text" class="form-control me-5" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />

                        </div>
                        <div class="input-group mb-3 mt-4">
                            <input type="text" class="form-control me-5" placeholder="Enter your subject" aria-label="Username" aria-describedby="basic-addon1" />

                        </div>
                        <button className='btn btn-outline-danger rounded-0 ps-5 pe-5 pt-3 pb-3 mt-3'>SEND</button>
                    </div>
                    <div className="col pt-5">
                        <div className="row pt-5">
                            <div className="col-12 col-md-2 mb-0 mt-3 ">
                                <i class="fa-regular fa-house"></i>
                            </div>
                            <div className="col-12 col-md-10"> 
                                <p className='mb-0'>Buttonwood, California</p>
                                <p>Rosemead, CA 91770</p>
                            </div>

                            <div className="col-12 col-md-2 mb-0 mt-4  ">
                                <i class="fa-solid fa-mobile-screen"></i>
                            </div>
                            <div className="col-12 col-md-10"> 
                                <p className='mb-0 mt-3'>+253 565 2365</p>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>

                            <div className="col-12 col-md-2 mb-0 mt-3">
                                <i class="fa-solid fa-inbox"></i>
                            </div>
                            <div className="col-12 col-md-10 "> 
                                <p className='mb-0 mt-3'>support@colorlib.com</p>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact
