import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'            
import Footer from './footer'
import Home from '../pages/Home'

const MainPage = () => {
    // const [tab, setTab] = useState("home");

    // const setdisplaytab = (e) => {
    //     setTab(e);
    // }

    return (
        <div className=' w-screen min-w-full max-w-screen-lg '>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default MainPage