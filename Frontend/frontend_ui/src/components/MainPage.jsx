// MainPage.jsx
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Service from '../pages/Service.jsx';
import Login from '../pages/login.jsx';

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
