import React, { useEffect, useRef } from 'react'
import Navbar from './Components/navbar'
import Stack from './Components/stack'
import Projects from './Components/projects'
import About from './Components/about'
import Contact from './Components/contact'


const App = ()=>  {
  useEffect(() => {
    // Prevent the browser from restoring scroll position
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Clear the hash
    if (window.location.hash) {
      window.history.replaceState(
        null, 
        '', 
        window.location.pathname + window.location.search
      );
    }
  }, []);
  
  return (
      <div style={{ overflowY: 'auto', height: '100vh', scrollBehavior: 'smooth' , scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        <Navbar />
        <About/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
