import React from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Timeline from './Components/Timeline';

function App() {
  return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Timeline />
        <Skills />
        <Work />
        <Contact />
      </div>
  );
}

export default App;
