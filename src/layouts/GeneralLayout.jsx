
// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Slide from "../component/Slide";
import Header from "../component/Header";
import Footer from "../component/Footer";

const GeneralLayout=(props1)=> {

    
    return (
        <>
        <Slide />

        <Header counter={props1.counter } />

        <Outlet />

        <Footer/>
        </>
    )
}

export default GeneralLayout;