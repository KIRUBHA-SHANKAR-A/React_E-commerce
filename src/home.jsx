import React from "react";
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Nav from "./Components/navbar";
import Slider from "./Components/slider";
import Footer from "./footer";
import CardSlider from "./smartphones";
import NewSlider from "./Components/NewSlider";
import Electronics from "./electronics";

const Home = () =>{
   

    return(
       <>
            <Nav />
            <NewSlider/>
            {/* <Slider /> */}
            <CardSlider />
            <Electronics/>
            <Footer />
       </>
    );
}

export default Home;