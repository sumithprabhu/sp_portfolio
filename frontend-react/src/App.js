import React from 'react'

import {About,Footer,Header,Projects,Skills} from './container/index';
import {Navbar} from './components/index'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </div>
  )
}

export default App