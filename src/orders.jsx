import React from "react";
import Nav from './Components/navbar';
import Footer from './footer';
const Orders = () =>
{
     return(
        <>
        <Nav />
        <div style={{background:'white',margin:'20px',borderRadius:'25px',padding:"30px",overflow:'hidden',marginBottom:"150px"}}>
            <div style={{background:"white"}}>
                <p style={{background:"white",marginLeft:"30px",fontSize:"30px",fontWeight:"600"}}>Your Orders</p>
             
                <div style={{background:'white',margin:'20px',borderRadius:'25px',display:"flex",marginBottom:"30px",paddingBottom:"20px",border:"2px solid black"}}>
                    <img src="https://m.media-amazon.com/images/I/61kReoWGtHL._SL1500_.jpg" width="120px" height="120px" style={{margin:"10px"}} alt="" />
                    <div style={{background:'white',margin:'20px',borderRadius:'25px',display:"flex",flexDirection:"column"}}>
                        <p style={{background:"white",fontSize:"20px",marginLeft:"60px",fontWeight:"500"}}> boAt Airdopes 91 Truly Wireless in Ear Ear Buds</p>
                        <div style={{background:'white',margin:'15px',borderRadius:'25px',display:"flex",flexDirection:"row"}}>
                            <p style={{background:"white",marginLeft:"40px",fontSize:"30px",fontWeight:"500"}}>₹999</p>
                            <p style={{background:"white",color:"green",paddingTop:"10px",marginLeft:"800px"}}>Delivered SuccessFully</p>
                        </div>
                    </div>
                </div>
                <div style={{background:'white',margin:'20px',borderRadius:'25px',display:"flex",marginBottom:"60px",paddingBottom:"20px",border:"2px solid black"}}>
                    <img src="https://m.media-amazon.com/images/I/714UFzp5O7L._SL1500_.jpg" width="120px" height="120px" style={{margin:"10px"}} alt="" />
                    <div style={{background:'white',margin:'20px',borderRadius:'25px',display:"flex",flexDirection:"column"}}>
                        <p style={{background:"white",fontSize:"20px",marginLeft:"60px",fontWeight:"500"}}> Dell 15 Thin & Light Laptop, Intel Core i5-1334U Processor</p>
                        <div style={{background:'white',margin:'15px',borderRadius:'25px',display:"flex",flexDirection:"row"}}>
                            <p style={{background:"white",marginLeft:"40px",fontSize:"30px",fontWeight:"500"}}>₹59,899</p>
                            <p style={{background:"white",color:"green",paddingTop:"10px",marginLeft:"750px"}}>Delivered SuccessFully</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default Orders;