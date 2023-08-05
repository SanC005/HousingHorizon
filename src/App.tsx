import React from 'react';
import Home from './components/home';
import './App.css';
import Input from './components/input';

function App() {
  return (
    <div className='flex flex-col justify-center bg-orange-400'>
      <Home/>
      <Input/>
    </div>
  );  
}

export default App;

