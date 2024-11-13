import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "./navbar.css";
const Nav = () =>
{
    return(
        <header class="header">
        <img class = "navbar-logo1" src="cart.png" ></img> 
        <p class="navbar-logo">PeekPicks</p>
      <nav className="navbar" >
            <a href="/home">Home</a>
            <a href="/orders">Orders</a>
            <a href="/offers">Offers</a>
            <a href="/cart">Cart</a>
            <a href="/contact">Contact</a>
      </nav>
        <input type="text" placeHolder ="Search" style={{backgroundColor:"white",height:"40px",width:'130px',borderRadius:"25px",fontWeight:"500",border:"1px solid black",paddingLeft:"10px"}} />
    <nav class="" style={{backgroundColor:"transparent"}}>
            <Link to='/login' style={{marginLeft:'20%',background:"none"}}><button class="b">Login</button></Link>
    </nav>
        </header>
    );
}
export default Nav;