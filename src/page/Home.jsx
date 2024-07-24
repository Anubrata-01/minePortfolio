// import React from 'react'

import About from "../components/About"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Home