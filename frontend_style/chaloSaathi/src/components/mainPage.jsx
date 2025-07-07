import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
