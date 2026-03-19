import React from 'react'

import img1 from '../assets/item1.avif'
import img2 from '../assets/item2.avif'
import img3 from '../assets/item3.avif'
import img4 from '../assets/item4.avif'

import img5 from '../assets/drink1.avif'
import img6 from '../assets/drink2.avif'
import img7 from '../assets/drink3.avif'
import img8 from '../assets/drink4.avif'
import About from './About'
import Test from './Test'





const pics = [
    {
        Image: img1,
        text: 'Cashmere Tank ',
        address: '$99.0',
        value: '$120.00',
    },
    {
        Image: img2,
        text: 'Cashmere Tank ',
        address: '$99.0   ',
        value: '$120.00',
    },
    {
        Image: img3,
        text: 'Cashmere Tank ',
        address: '$99.0 ',
        value: '$120.00',
    },
    {
        Image: img4,
        text: 'Cashmere Tank ',
        address: '$99.0 ',
        value: '$120.00',
    },
]


const data = [
    {
        Image: img5,
        text: 'Drinks',
        address: '$99.0',
        value: '$120.00',
    },
    {
        Image: img6,
        text: 'Cup of Icecream',
        address: '$99.0   ',
        value: '$120.00',
    },
    {
        Image: img7,
        text: 'Drinks',
        address: '$99.0 ',
        value: '$120.00',
    },
    {
        Image: img8,
        text: 'Drinks',
        address: '$99.0 ',
        value: '$120.00',
    },
]


const Cards = () => {
    return (
        <>
            <div className='bg-light pt-5 pb-5'>
                <h2 className='m-5 text-center  fw-bold ' style={{ fontFamily: 'Jost, sans-serif' }}>Trending This Weeks</h2>

                <div className="container">
                    <div className="row">

                        {
                            pics.map((item, index) => {
                                return (<div className="col-12 col-md-6 col-lg-3">
                                    <div class="card border-0 bg-light text-center" key={index}>
                                        <img src={item.Image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">{item.text}</p>
                                            <h4>{item.address} <span className='fs-6 text-decoration-line-through'>{item.value}</span></h4>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                    </div>
                </div>

            </div>
         <Test/>



            <div className=' pt-5mb-5 mt-5 '>
                <h2 className='ps-5 pb-5 text-center  fw-bold' style={{ fontFamily: 'Jost, sans-serif' }}>You May Like</h2>

                <div className="container">
                    <div className="row">

                        {
                            data.map((item, index) => {
                                return (<div className="col-12 col-md-6 col-lg-3">
                                    <div class="card border-0 bg-light text-center" key={index}>
                                        <img src={item.Image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text" className=' hover-overlay '>{item.text}</p>
                                            <h4>{item.address} <span className='fs-6 text-decoration-line-through'>{item.value}</span></h4>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                    </div>
                </div>

            </div>


           
     

    </>
    
  )
}

export default Cards
