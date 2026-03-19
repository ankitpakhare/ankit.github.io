import React from 'react'
import Rapid from './Components/Rapidapi'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'



function App() {

  return (
    <>
    <Nav/>
    <Hero/>
<About/>
<Cards/>
 <Rapid />
 <Contact/>
 <Footer/>
      
    </>
  )
}

export default App
