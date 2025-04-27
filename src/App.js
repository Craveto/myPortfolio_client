import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ParticlesBackground from './components/ParticlesBackground';
import Academics from './components/Academics';
import Skills from './components/Skills';
import Footer from './components/Footer';
// import Contact from './components/ContactModal';

function App() {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/test`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error connecting to backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Academics />
      <Skills />

      <Footer />
      
    </div>
  );
}

export default App;
