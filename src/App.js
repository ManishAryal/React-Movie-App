import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movielist from './components/Movielist';


const App=()=> {
  return (
    <div>
      <Navbar/>
      <Movielist/>
      
    </div>
  );

}

export default App;
