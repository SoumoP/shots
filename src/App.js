import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import PhotoList from './components/content/photo-list';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PhotoList/>
    </div>
  );
}

export default App;
