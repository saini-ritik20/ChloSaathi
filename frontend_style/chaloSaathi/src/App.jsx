// // // import "./App.css";
// // // import MainPage from "./components/mainPage"; // ✅ fixed path
// // // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // // import Home from "./pages/Home";
// // // import About from "./pages/AboutUs";
// // // import Service from "./pages/Service";
// // // import Contact from "./pages/Contact";
// // // import BookRide from "./pages/BookRide";
// // // import Login from "./pages/login";
// // // import SignIn from "./pages/SignIn";
// // // import Dashboard from "./pages/Dasboard";
// // // import { useEffect } from "react";
// // // import axios from "./api/axios";
// // // import api from "./api/axios";  
// // // // import Dashboard from "./pages/Dasboard";


// // // const router = createBrowserRouter([
// // //   {
// // //     path: '/',
// // //     element: <MainPage />,
// // //     children: [
// // //       { path: '/', element: <Home /> },
// // //       { path: '/Dashboard', element: <Dashboard /> },
// // //       { path: '/About', element: <About /> },
// // //       { path: '/services', element: <Service /> },
// // //       { path: '/Contact', element: <Contact /> },
// // //       {path: '/BookRide',element:<BookRide/>},
// // //       // {path: '/BookingForm',element:<BookingForm/>},
// // //       // {path: '/ConfirmationForm',element:<ConfirmationForm/>},


// // //       // { path: "*", element: <NotFound /> },
// // //     ]
// // //   },
// // //   { path: '/Login', element: <Login /> },
// // //   {path:'/Register',element:<SignIn/>}
// // // ]);

// // // function App() {

// // //   api.get("/api/hello/")
// // //     .then(res => console.log(res.data))
// // //     .catch(err => console.error("API error:", err));

// // //   // Optional: Example API call on App load
// // //   // useEffect(() => {
// // //   //   axios.get('/api/hello/')  // this hits http://127.0.0.1:8000/api/hello/
// // //   //     .then(res => {
// // //   //       console.log("Backend says:", res.data);
// // //   //     })
// // //   //     .catch(err => {
// // //   //       console.error("API error:", err);
// // //   //     });
// // //   // }, []);
// // //   return <RouterProvider router={router} />;
// // // }

// // // export default App;

// // import "./App.css";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import MainPage from "./components/MainPage";
// // import Home from "./pages/Home";
// // import About from "./pages/AboutUs";
// // import Service from "./pages/Service";
// // import Contact from "./pages/Contact";
// // import BookRide from "./pages/BookRide";
// // import Login from "./pages/login";
// // import SignIn from "./pages/SignIn";
// // import Dashboard from "./pages/Dasboard";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/" element={<MainPage />}>
// //           <Route index element={<Home />} /> {/* ✅ Default route */}
// //           <Route path="dashboard" element={<Dashboard />} />
// //           <Route path="about" element={<About />} />
// //           <Route path="services" element={<Service />} />
// //           <Route path="contact" element={<Contact />} />
// //           <Route path="bookride" element={<BookRide />} />
// //         </Route>

// //         {/* Auth Routes */}
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<SignIn />} />

// //         {/* 404 Page */}
// //         <Route path="*" element={<h1>404 - Page Not Found</h1>} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google"; // ✅ import provider

// import MainPage from "./components/MainPage";
// import Home from "./pages/Home";
// import About from "./pages/AboutUs";
// import Service from "./pages/Service";
// import Contact from "./pages/Contact";
// import BookRide from "./pages/BookRide";
// import Login from "./pages/Login";
// import SignIn from "./pages/SignIn";
// import Dashboard from "./pages/Dasboard";

// function App() {
//   // ✅ Load Google Client ID from .env
//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

//   return (
//     // ✅ Wrap the entire app with GoogleOAuthProvider
//     <GoogleOAuthProvider clientId={clientId}>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<MainPage />}>
//             <Route index element={<Home />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="about" element={<About />} />
//             <Route path="services" element={<Service />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="bookride" element={<BookRide />} />
//           </Route>

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

