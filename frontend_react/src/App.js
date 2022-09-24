import React from 'react'

import { About, Footer, Header, Skills, Experience, Projects } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />  
      <Experience />
      <Footer />
    </div>
  );
}

export default App;