import "./App.css";
import MainPage from "./components/mainPage"; // ✅ fixed path
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/About', element: <About /> },
      { path: '/Service', element: <Service /> },
      { path: '/Contact', element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ]
  },
  { path: '/Login', element: <Login /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
