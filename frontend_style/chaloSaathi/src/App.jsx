// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import MainPage from "./components/MainPage";
// import Home from "./pages/Home";
// import About from "./pages/AboutUs";
// import Service from "./pages/Service";
// import Contact from "./pages/Contact";
// import BookRide from "./pages/BookRide";
// import Login from "./pages/login";
// import SignIn from "./pages/SignIn";
// import Dashboard from "./pages/Dasboard";

// // make a component here 
// import { useContext } from "react";
// import { AuthContext } from "./components/AuthContext";
// import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ children }) => {
// //   const { user } = useContext(AuthContext);
// //   if (!user) return <Navigate to="/login" replace />;
// //   return children; };

// const ProtectedRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   if (!user) return <Navigate to="/" replace />; // Redirect to home if not logged in
//   return children;
// };


// function App() {
//   const { user } = useContext(AuthContext);
//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  


  

//   return (

    
//     <GoogleOAuthProvider clientId={clientId}>
//       <Router>
//         <Routes>
//       {
//         user ? (
//           // ✅ If logged in → Show ONLY Dashboard (no MainPage, no Navbar)
//           <Route path="/*" element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           } />
//         ) : (
//     // ✅ If NOT logged in → Show normal website with navbar
//           <Route path="/" element={<MainPage />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="services" element={<Service />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="bookride" element={<BookRide />} />
//           </Route>
//         )
//       }


//           {/* Auth Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignIn />} />

//           {/* 404 Page */}
//           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;

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
import RideMatchRealtime from "./pages/RideMatch";

import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";
import { Navigate } from "react-router-dom";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/" replace />; // redirect to home if not logged in
  return children;
};

function App() {
  const { user } = useContext(AuthContext);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          {/* Authenticated Users */}
          {user ? (
            <>
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ride-match"
                element={
                  <ProtectedRoute>
                    <RideMatchRealtime />
                  </ProtectedRoute>
                }
              />
            </>
          ) : (
            <>
              {/* Public Routes */}
              <Route path="/" element={<MainPage />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Service />} />
                <Route path="contact" element={<Contact />} />
                <Route path="bookride" element={<BookRide />} />
              </Route>
            </>
          )}

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
