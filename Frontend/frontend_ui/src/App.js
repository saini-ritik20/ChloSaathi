// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// optional, another route
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/About" element={<AboutPage />} />
    //   </Routes>
    // </Router>
    <div>
      {<Home/>}
    </div>
  );
}

export default App;
