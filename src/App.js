import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainPage'
import './index.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />  
    </div>
  );
}

export default App;
