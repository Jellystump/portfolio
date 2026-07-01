import React, { useEffect } from 'react'
import Navbar from './Components/navbar'
import Stack from './Components/stack'
import Projects from './Components/projects'
import About from './Components/about'
import Contact from './Components/contact'


const App = ()=>  {
  const containerRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
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
