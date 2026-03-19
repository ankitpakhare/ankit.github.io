import React from 'react'

const Nav = () => {
  return (
    <div>
         <section className='bg-light '>
                <nav class="  container navbar navbar-expand-lg  p-3 top-fixed  ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src="src\assets\images\logo.png" alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active mx-4" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-3" href="#">Men</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-3" href="#">Women</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-3" href="#">Baby Collection</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle mx-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link" aria-disabled="true">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link me-5 ms-3" href="#">Contact</a>
                                </li>


                            </ul>
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0" >
                                <li class="nav-item">
                                    <a class="nav-link " href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#"><i class="fa-solid fa-user" /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                </li>
                            </ul>

                            {/* <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> */}

                        </div>
                    </div>
                </nav>

                <p className='text-center bg-dark text-white p-3'>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <a href="#" className='text-white text-decoration-none' >
                    Shop Now <hr style={{ height: '1px', width: '80px', marginLeft: '62%', color: 'white', marginTop: '-1px', fontWeight: 'bolder', border: '1px solid white' }} /></a></p>
            </section>
      
    </div>
  )
}

export default Nav
