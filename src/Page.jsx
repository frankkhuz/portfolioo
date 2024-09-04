import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Footer from './Footer'

const Page = () => {
  return (
    <div style={{height:"100vh"}}>
        <Navbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}

export default Page