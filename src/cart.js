// import React, { useEffect,useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { incrementItem, decrementItem } from './redux/actions'; // Import the actions
// import Nav from './Components/navbar';

// const Carts = () => {
//   const cartItems = useSelector((state) => state.cart.items); // Use selector to access items
//   const dispatch = useDispatch();
//   const [Cart, setCart] = useState([]);

//   useEffect(() => {

//                   const fetchCart = async () => {
//                       try {
//                           const response = await axios.get('http://localhost:3002/carts');
//                           setCart(response.data);  // Storing the data
//                       } catch (error) {
//                           console.error('Error fetching bookings:', error);
//                       }
//                   };
          
//                   fetchCart();
//               }, []);

//               const handleIncrement = (productId) => {
//                 setCartItems(prevItems =>
//                   prevItems.map(item =>
//                     item.productId === productId 
//                       ? { ...item, quantity: item.quantity + 1 } 
//                       : item
//                   )
//                 );
//               };
            
//               const handleDecrement = (productId) => {
//                 setCartItems(prevItems => 
//                   prevItems.map(item => 
//                     item.productId === productId && item.quantity > 1
//                       ? { ...item, quantity: item.quantity - 1 }
//                       : item
//                   )
//                 );
//               };
            
//               const removeFromCart = (productId) => {
//                 setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
//               };
//   };

//   return (
//     <>
//       <Nav />
//       <div style={{ backgroundColor: "transparent" }}>
//         <div style={{ backgroundColor: "transparent" }}>
//           <div className="about">
//             <p className="head">Your Cart</p>
//             {cartItems.length > 0 ? (
//               <ul style={{ listStyleType: 'none', backgroundColor: "transparent" }}>
//                 {cartItems.map((item) => (
//                   <li key={item.productId} style={{ borderRadius: "25px", backgroundColor: "transparent" }}>
//                     <div style={{ display: "flex", justifyContent: 'space-between', background: "lightgrey", margin: "40px", padding: "20px", borderRadius: "25px" }}>
//                       <img src={item.image} style={{ width: "180px", borderRadius: "25px" }} alt={item.name} />
//                       <h3 style={{ paddingTop: "70px", backgroundColor: "transparent" }}>{item.name}</h3>
//                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "transparent", paddingTop: "50px" }}>
//                         <p style={{ backgroundColor: "transparent" }}>Quantity: {item.quantity}</p>
//                         <div style={{ margin: "10px", backgroundColor: "transparent" }}>
//                           <button style={{ borderRadius: "20px", width: "100px", height: "40px", margin: "10px" }} onClick={() => handleIncrement(item.productId)}>+</button>
//                           <button style={{ borderRadius: "20px", width: "100px", height: "40px", margin: "10px" }} onClick={() => handleDecrement(item.productId)}>-</button>
//                         </div>
                        
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <center><p style={{ padding: "20px", background: 'white' }}>Your Cart is empty!</p></center>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Carts;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Components/navbar';
import Footer from './footer';

const Carts = () => {
  const [Cart, setCart] = useState([]);

  const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
}

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3003/carts');
        setCart(response.data);  // Storing the data
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const totalMoney = Cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Increment quantity
  const handleIncrement = async (id, quantity) => {
    const newQuantity = quantity + 1;
    const updatedItem = Cart.find(item => item.id === id);
     // Find the item with the specific id
    try {
      // Update the entire item and send it to the server
      await axios.put(`http://localhost:3003/carts/${id}`, { ...updatedItem, quantity: newQuantity });
      setCart(prevCart =>
        prevCart.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  // Decrement quantity
  const handleDecrement = async (id, quantity) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const updatedItem = Cart.find(item => item.id === id); // Find the item with the specific id
      try {
        // Update the entire item and send it to the server
        await axios.put(`http://localhost:3003/carts/${id}`, { ...updatedItem, quantity: newQuantity });
        setCart(prevCart =>
          prevCart.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
        );
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
  };

  // Remove item from cart
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/carts/${id}`);
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <>
      <Nav />
      <div style={{ backgroundColor: 'transparent' }}>
        <div className="about-container">
          <div className="about">
            <p className="head">Your Cart</p>
            {Cart.length > 0 ? (
              <ul style={{ listStyleType: 'none', backgroundColor: 'transparent' }}>
                {Cart.map((item) => (
                  <li key={item.id} style={{ borderRadius: '25px', backgroundColor: 'transparent' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: 'lightgrey',
                        margin: '40px',
                        padding: '20px',
                        borderRadius: '25px',
                      }}
                    >
                      <img src={item.image} style={{ width: '180px', borderRadius: '25px' }} alt="product" />
                      <h3 style={{ paddingTop: '70px', backgroundColor: 'transparent' }}>{item.name}</h3>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', paddingTop: '10px' }}>
                        <div style={{display:"flex",backgroundColor:"transparent"}}>
                          <button style={{ borderRadius: "20px", width: "100px", height: "40px", margin: "10px"}} onClick={() => handleIncrement(item.id, item.quantity)}>+</button>
                          <h5 style={{padding:"20px",backgroundColor:"transparent"}}> {item.quantity}</h5>
                          <button style={{ borderRadius: "20px", width: "100px", height: "40px", margin: "10px" }} onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
                        </div>
                          <h4 style={{padding:"20px 80px",backgroundColor:"transparent"}}>₹  {item.price *item.quantity}</h4>
                        <button 
                      style={{ borderRadius: "20px", width: "100px", height: "40px", margin: "10px" }} onClick={() => handleRemove(item.id)}>Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              <h2 style={{backgroundColor:"transparent"}}>Total Price : ₹ {totalMoney}</h2>
              <center style={{backgroundColor:"transparent"}}> <button  className="buy" style={{ borderRadius: "20px", width: "100px", height: "40px", margin: "10px"}} >Buy</button></center>
              </ul>
            ) : (
              <center><p style={{ padding: '20px', background: 'white' }}>Your Cart is empty!</p></center>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Details.css';
// import logo from './raillogo/logo.jpg';
// import DeleteIcon from '@mui/icons-material/Delete'; // Import Delete icon
// import { useNavigate } from 'react-router-dom';

// const Details = () => {
//     const [bookings, setBookings] = useState([]);
//     const navigate = useNavigate();
//     const goToSignup = () => navigate('/Sign');
//     const goToHome = () => navigate('/Home');
//     const goToLogin = () => navigate('/');
//     useEffect(() => {
//         // Fetch bookings data from JSON server
//         const fetchBookings = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/cart');
//                 setBookings(response.data);  // Storing the data
//             } catch (error) {
//                 console.error('Error fetching bookings:', error);
//             }
//         };

//         fetchBookings();
//     }, []);

//     // Function to handle deletion of booking
//     const handleDelete = async (id) => {
//         try {
//             // Sending DELETE request to remove the booking from the server
//             await axios.delete(http://localhost:3000/cart/${id});
//             // Updating the bookings list after deletion
//             setBookings(bookings.filter(booking => booking.id !== id));
//             alert('Booking cancelled successfully!');
//         } catch (error) {
//             console.error('Error deleting booking:', error);
//             alert('Failed to cancel booking, please try again.');
//         }
//     };

//     return (
//         <div>
//             <ul className='header'>
//                 <img src={logo} style={{width:"30px"}} alt=''></img>
//                  <li onClick={goToHome}>Home</li>
//                 <li onClick={goToLogin}>Login</li>
//                 <li onClick={goToSignup}>Register</li>
//                 <li>About Us</li>
//             </ul>
//             <div style={{height:"100px"}}>
//             </div>
//             <div className="details-container">
//                 <h1>Booking Details</h1>
//                 {bookings.length > 0 ? (
//                     <ul>
//                         {bookings.map(booking => (
//                             <li key={booking.id}>
//                                 <h3>{booking.trainName}</h3>
//                                 <p><strong>Location:</strong> {booking.location}</p>
//                                 <p><strong>Timing:</strong> {booking.timing}</p>
//                                 <button 
//                                     className="delete-btn" 
//                                     onClick={() => handleDelete(booking.id)}
//                                     >
//                                 <DeleteIcon />{/* Delete icon here */}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No bookings found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default Details;