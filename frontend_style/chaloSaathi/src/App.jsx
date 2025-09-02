import "./App.css";
import MainPage from "./components/mainPage"; // ✅ fixed path
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import BookRide from "./pages/BookRide";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";
import axios from "./api/axios";
import api from "./api/axios";  


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/About', element: <About /> },
      { path: '/services', element: <Service /> },
      { path: '/Contact', element: <Contact /> },
      {path: '/BookRide',element:<BookRide/>},
      // {path: '/BookingForm',element:<BookingForm/>},
      // {path: '/ConfirmationForm',element:<ConfirmationForm/>},


      // { path: "*", element: <NotFound /> },
    ]
  },
  { path: '/Login', element: <Login /> },
  {path:'/Register',element:<SignIn/>}
]);

function App() {

  api.get("/api/hello/")
    .then(res => console.log(res.data))
    .catch(err => console.error("API error:", err));

  // Optional: Example API call on App load
  // useEffect(() => {
  //   axios.get('/api/hello/')  // this hits http://127.0.0.1:8000/api/hello/
  //     .then(res => {
  //       console.log("Backend says:", res.data);
  //     })
  //     .catch(err => {
  //       console.error("API error:", err);
  //     });
  // }, []);
  return <RouterProvider router={router} />;
}

export default App;
