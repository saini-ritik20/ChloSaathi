import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainPage from "./components/MainPage";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import BookRide from "./pages/BookRide";
import Login from "./pages/login";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dasboard";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // ✅ Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          {/* Public/Protected Main Routes */}
          <Route path="/" element={<MainPage />}>
            {/* ✅ If user logged in → Dashboard, else → Home */}
            <Route index element={user ? <Dashboard /> : <Home />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bookride" element={<BookRide />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />

          {/* 404 Page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

