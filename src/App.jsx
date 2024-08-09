import React from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/skills'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
