import React from 'react'
import img1 from '../assets/images/latest1.jpg'
import img2 from '../assets/images/latest2.jpg'
import img3 from '../assets/images/latest3.jpg'
import img4 from '../assets/images/latest4.jpg'


import img5 from '../assets/images/latest5.jpg'
import img6 from '../assets/images/latest6.jpg'
import img7 from '../assets/images/latest7.jpg'
import img8 from '../assets/images/latest8.jpg'


import img11 from '../assets/images/blog1.jpg'
import img12 from '../assets/images/blog2.jpg'
import img13 from '../assets/images/blog3.jpg'
import Testemonial from './Testemonial'

const pics = [
  {
    Image: img1,
    text: 'Cashmere Tank + Bag',
    address: '$99.0',
    value: '$120.00',
  },
  {
    Image: img2,
    text: 'Cashmere Tank + Bag',
    address: '$99.0   ',
    value: '$120.00',
  },
  {
    Image: img3,
    text: 'Cashmere Tank + Bag',
    address: '$99.0 ',
    value: '$120.00',
  },
  {
    Image: img4,
    text: 'Cashmere Tank + Bag',
    address: '$99.0 ',
    value: '$120.00',
  },
]


const data = [
  {
    Image: img5,
    text: 'Cashmere Tank + Bag',
    address: '$99.0',
    value: '$120.00',
  },
  {
    Image: img6,
    text: 'Cashmere Tank + Bag',
    address: '$99.0   ',
    value: '$120.00',
  },
  {
    Image: img7,
    text: 'Cashmere Tank + Bag',
    address: '$99.0 ',
    value: '$120.00',
  },
  {
    Image: img8,
    text: 'Cashmere Tank + Bag',
    address: '$99.0 ',
    value: '$120.00',
  },
]

// 3rd cards 

const tips = [
  {
    Image: img11,
    text:'Fashion Tips',
    title: 'What Curling Irons Are The Best Ones',
    address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro autem natus, fugiat . ',
    button: 'Read More',
  },
  {
   Image: img12,
    text:'Fashion Tips',
    title: 'What Curling Irons Are The Best Ones',
    address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro autem natus, fugiat .',
    button: 'Read More',
  },
  {
    Image: img13,
    text:'Fashion Tips',
    title: 'What Curling Irons Are The Best Ones',
    address: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro autem natus, fugiat.',
    button: 'Read More',
  },
 
]



const Cards = () => {
  return (
    <>
    <div className='bg-light pt-5 pb-5'>
      <h2 className='m-5 text-center  fw-bold ' style={{fontFamily:'Jost, sans-serif'}}>Trending This Weeks</h2>

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

    <Testemonial />

     <div className=' pt-5mb-5 mt-5 '>
      <h2 className='ps-5 pb-5 text-center  fw-bold' style={{fontFamily:'Jost, sans-serif'}}>You May Like</h2>

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


         <div className='bg-light pt-5 mt-5 pb-5 '>
      <h2 className='ps-5 pb-5 text-center  fw-bold' style={{fontFamily:'Jost, sans-serif'}}>Latest News</h2>

      <div className="container">
        <div className="row">

          {
            tips.map((item, index) => {
              return (<div className="col-12 col-md-6 col-lg-4">
                <div class="card border-0 bg-light " key={index}>
                  <img src={item.Image} class="card-img-top " style={{width:'100%',

                  }} alt="..." />
                  <div class="card-body" >
                    <p class="card-text" className=' hover-overlay '>{item.text}</p>
                    <h4>{item.title} </h4>
                    <p>{item.address}</p>
                    <a className='border-0 bg-light ' href='#'>{item.button}</a>
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
