import React from 'react';
import Home from './components/home';
import './App.css';
import Input from './components/input';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className=''>
      <div className='h-16'>
      <Navbar/>
      </div>
    <div className='flex flex-col justify-center bg-orange-400 '>
      <Routes>
          <Route path="/" element={<div>
            <Home />
            <Input/>
            </div>
            } />
       </Routes>
    </div>
    </div>
  );  
}

export default App;

