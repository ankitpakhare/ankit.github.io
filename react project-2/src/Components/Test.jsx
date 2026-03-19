import React from 'react'
import test from '../assets/testi.png'

const Test = () => {
    return (
        <div >
            <div>
                <img src={ test} alt="" style={{height:'50vh', width:'100%' ,objectFit:'cover'}} />
            </div>
            <div className='text-center' style={{marginTop:'-15%', marginBottom:'15%', color:'white'}}>
                <h3>Now Booking</h3>
                <h2 className='display-4 fw-bold'>Private Dinners & Happy Hours</h2>
            </div>


        </div>
    )
}

export default Test
