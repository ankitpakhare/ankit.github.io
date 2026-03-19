import React from 'react'
import logo from '../assets/image.png'
const Nav = () => {
    return (
        <div>
            <section className='top-fixed'>
                <nav class="navbar navbar-expand-lg  fixed top bg-secondary p-4 ">
                    <div class="container bg-white  rounded-pill p-2">
                        <a class="navbar-brand ps-5" href="#"><img src={logo} style={{height:'50px'}} className='rounded-5' alt="" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active mx-4 " aria-current="page" href="# ">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  mx-4" href="#">About</a>
                                </li>

                                 <li class="nav-item">
                                    <a class="nav-link  mx-4" href="#">Menu</a>
                                </li>

                                 <li class="nav-item">
                                    <a class="nav-link  mx-4" href="#">Galary</a>
                                </li>

                                 <li class="nav-item">
                                    <a class="nav-link mx-4" href="#">Blog</a>
                                </li>
                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                            
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success me-5 " type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <marquee className='text-center bg-warning text-danger fs-6 fw-bold mt-1 pt-1' behavior="scroll" direction="up"><p >Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer </p></marquee>
            </section>
        </div>
    )
}

export default Nav
