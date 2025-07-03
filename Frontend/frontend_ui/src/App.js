// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// optional, another route
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';



function App() {
  return (
    
    <div>
      {/* {<Home/>} */}
      {<Service/>}
      {/* {<Contact/>} */}
    </div>
  );
}

export default App;
