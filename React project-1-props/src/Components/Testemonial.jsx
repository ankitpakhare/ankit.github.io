import React from 'react'

const Testemonial = () => {
    return (
        <div>
            <section className='text-center pt-5 pb-5' style={{ backgroundColor:'#F3EAD8', marginTop:'100px', paddingmarginBottom:'100px' }}>
                <h2 className='mb-5 mt-5'>Customer Testimonials</h2>

                <p style={{ fontSize:'20px', marginBottom:'50px'}}>Everybody is different, which is why we offer styles for every body. <br />Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos <br /> facilis neque nulla earum.</p>
                <div>
                    <img src="src\assets\images\founder-img.png" alt="" />
                    <div  className=' ' style={{marginTop:'-55px', marginLeft:'54%', textAlign: 'start', paddingBottom:'50px'}}>
                        <p style={{fontSize:'14px', marginBottom:'0px', fontWeight:'bold'}}>
                            Petey Cruiser
                        </p>
                        <p style={{fontSize:'16px', fontWeight:'lighter'}}>
                            Designer  At Colourlib
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Testemonial
