import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Container } from "@mui/material";
import './front.css';
const Front = () =>
{
     return(
         <div class="start" style={{paddingBottom:"480px"}}> 
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container maxWidth="xs" style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',margin:'auto',marginBottom:"00px",backgroundColor:'rgba(210, 210, 210, 0.792)'}}>
        <img class = "logo" src="https://cdn-icons-png.flaticon.com/128/711/711979.png" style={{backgroundColor:'rgba(210, 210, 210, 0.792)'}} alt=""></img>  
     
        <h1 class ="peek" style={{backgroundColor:'rgba(210, 210, 210, 0.792)'}}>PeekPicks</h1>
        </Container>
            <br />
            <br />
            <br />
    
        <Container maxWidth='xs' style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',margin:'auto',backgroundColor:'rgba(210, 210, 210, 0.792)'}}>
        <Link to="/home">  <button id="button1">Get Started</button> </Link> 
        </Container>
        </div>
     );
}
export default Front;