import React from 'react'

import NavBar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Productviewer from './components/Productviewer.jsx'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import Showcase from './components/Showcase.jsx'
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
 <main>
  <NavBar/>1
  <Hero/>
  <Productviewer/>
  <Showcase/>
 </main>
  )
}

export default App