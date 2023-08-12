import React from 'react';
import Home from './components/home';
import './App.css';
import Input from './components/input';
import Navbar from './components/navbar';

function App() {
  return (
    <div className=''>
      <div className='h-16'>
      <Navbar/>
      </div>
    <div className='flex flex-col justify-center bg-orange-400 '>
      <Home/>
      <Input/>
    </div>
    </div>
  );  
}

export default App;

