import React from 'react'
import Navbar from './Components/navbar'
import Stack from './Components/stack'
import Projects from './Components/projects'
import About from './Components/about'

const App = ()=>  {

  return (
      <div style={{ overflowY: 'auto', height: '100vh' }}>
        <Navbar />
        <About/>
        <Projects/>
      </div>
  )
}

export default App
