import React from 'react'
import pic1 from '../assets/bg_1.jpg'
import pic2 from '../assets/bg_2.jpg'
import pic3 from '../assets/bg_5.jpg'


const Hero = () => {
    return (
        <div>
            <section>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={pic1} class="d-block"  style={{height:'95vh', width:'100%',objectFit:'cover', filter: 'brightness(80%)'}} alt="..."/>
                                <div class="carousel-caption d-none d-md-block" style={{}}>
                                    <h5 style={{fontFamily:'"Dancing Script", cursive', fontSize:'100px',marginTop:'-40%'}}>Cooking Since</h5>
                                    <p>Food is our common ground, a universal experience</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic2} class="d-block "  style={{height:'95vh', width:'100%',objectFit:'cover',filter: 'brightness(80%)'}} alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 style={{fontFamily:'"Dancing Script", cursive', fontSize:'100px',marginTop:'-40%'}}>Best Quality</h5>
                                    <p>Food is our common ground, a universal experience</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src={pic3} class="d-block " style={{height:'95vh', width:'100%',objectFit:'cover',filter: 'brightness(80%)'}}  alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 style={{fontFamily:'"Dancing Script", cursive', fontSize:'100px',marginTop:'-40%'}}>Delicious test</h5>
                                    <p>Food is our common ground, a universal experience.</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

        </div>
    )
}

export default Hero
