import React from "react";
import Nav from './Components/navbar';
import Footer from './footer';
import './contact.css';

const About = () =>
{
     return(
        <>
        <Nav/>
         <div className="about-container">
            <div className="about">
               <p class="head">About Us</p>
               <p class="headin">Our Journey</p>
               <p class="content" style={{textIndent:"80px"}}> PeekPicks began with a simple goal: to bring the best tech gadgets and accessories to everyone. What started as a passion project has evolved into a trusted online store for tech enthusiasts around the world.</p>
               <p class="headin">Our Mission</p>
               <p class="content" style={{textIndent:"80px"}}>We aim to make technology accessible and beneficial for everyone. Our mission is to provide products that are not only functional but also easy to use and stylish.</p>
            <br/></div>  
            
            <div className="about">
                <p className="head">Contact</p>
                <div style={{background:'white',display:"flex",marginTop:"30px"}}>
                <img src="https://cdn-icons-png.flaticon.com/128/1006/1006771.png" alt="" style={{backgroundColor:'white',width:"30px",marginLeft:"200px"}}/>
                <p class="content" style={{backgroundColor:'white',marginLeft:"20px",textDecoration:"underline",cursor:"pointer"}}>www.peekpicks.com</p>
                <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="" style={{backgroundColor:'white',width:"30px",marginLeft:"550px"}}/>
                <p class="content" style={{backgroundColor:'white',marginLeft:"20px",marginTop:"2px",cursor:"pointer"}}>customercare.peekpicks.ac.in</p>
               </div>
                <div style={{background:'white',display:"flex",marginTop:"40px",marginBottom:"25px"}}>
                <img src="https://cdn-icons-png.flaticon.com/128/25/25347.png" alt="" style={{backgroundColor:'white',width:"30px",marginLeft:"200px"}}/>
                <p class="content" style={{backgroundColor:'white',marginLeft:"20px",textDecoration:"underline",cursor:"pointer"}}>www.twitter.com/peekpicks</p>
                <img src="https://cdn-icons-png.flaticon.com/128/3661/3661391.png" alt="" style={{backgroundColor:'white',width:"30px",marginLeft:"500px"}}/>
                <p class="content" style={{backgroundColor:'white',marginLeft:"20px",marginTop:"2px",cursor:"pointer"}}>www.instagram.com/peekpicks</p>
               </div>
            </div>
          </div>
          <Footer/>
        </>
     );
}

export default About;