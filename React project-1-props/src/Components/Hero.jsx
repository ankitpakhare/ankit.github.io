import React from 'react'

const Hero = () => {
  return (
    <div>
         {/* carousel */}
            <section>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner aaa">
                        <div class="carousel-item active ">
                            <img src="src\assets\images\h1_hero1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block text-start text-dark ">
                                <p style={{ fontFamily: '"Clicker Script", cursive', fontSize: '50px' }}>Fashion Sale</p>
                                <h5 style={{ fontFamily: 'Jost, sans-serif', fontWeight: '500' }}>Minimal Menz Style</h5>
                                <p className='w-50'>Some representative placeholder content for the first slide. Some representative placeholder content for the first slide.</p>
                                <button className='btn btn-outline-dark rounded-0 ps-5 pe-5'>SHOP NOW</button>
                            </div>
                        </div>
                        <div class="carousel-item bbb ">
                            <img src="src\assets\images\h1_hero2.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block text-end text-dark ">
                                <p style={{ fontFamily: '"Clicker Script", cursive', fontSize: '50px' }}>Fashion Sale</p>
                                <h5 style={{ fontFamily: 'Jost, sans-serif', fontSize: '55px', fontWeight: '500' }}>Minimal Menz Style</h5>
                                <p className=''>Some representative placeholder content for the second slide. <br />
                                    Some representative placeholder content for the first slide.</p>
                                <button className='btn btn-outline-dark rounded-0 ps-5 pe-5'>SHOP NOW</button>
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
