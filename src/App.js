import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Front from "./front";
import LoginPage from "./login";
import Register from "./register";
import ProductGrid from "./smartphones";
import Home from "./home";
import Offers from "./offers";
import About from "./contact";
import Orders from "./orders";
import Cart from "./cart";

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Front />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/login' element={ <LoginPage />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/offers' element={ <Offers />} />
          <Route path='/contact' element={ <About />} />
          <Route path='/orders' element={ <Orders />} />
          <Route path='/cart' element={ <Cart />} />
          
        </Routes>
      </Router>
    
      
  );
}

export default App;
