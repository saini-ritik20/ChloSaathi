import Navbar from './Navbar';
import Footer from './footer';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Service from '../pages/Service.jsx';
import Login from '../pages/login';

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;