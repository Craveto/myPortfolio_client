import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
