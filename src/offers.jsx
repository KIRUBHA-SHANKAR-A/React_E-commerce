import React from 'react';
import './offers.css';
import Nav from './Components/navbar';
import Footer from './footer';

const products = [
  {
    id: 3,
    name: 'Redmi 13 5G',
    description: 'Modern sunglasses with UV protection.',
    old:'₹15,699',
    price: '₹13,998',
    image: 'https://m.media-amazon.com/images/I/81Q9jpYOFdL._SL1500_.jpg',
    altText: 'Product 3 Image',
},
{
    id: 3,
    name: 'realme NARZO 5G',
    description: 'Modern sunglasses with UV protection.',
    old:'₹17,599',
    price: '₹14,999',
    image: 'https://m.media-amazon.com/images/I/71h8NUTmBOL._SL1500_.jpg',
    altText: 'Product 3 Image',
},
{
    id: 3,
    name: 'Redmi Note 13 Pro+',
    description: 'Modern sunglasses with UV protection.',
    old:'₹34,599',
    price: '₹29,499',
    image: 'https://m.media-amazon.com/images/I/819sWoSDFRL._SL1500_.jpg',
    altText: 'Product 3 Image',
},
{
    id: 3,
    name: 'Oneplus Nord CE4',
    description: 'Modern sunglasses with UV protection.',
    old:'₹26,999',
    price: '₹24,998',
    image: 'https://m.media-amazon.com/images/I/61nxQ62qglL._SX522_.jpg',
    altText: 'Product 3 Image',
},
{
    id: 3,
    name: 'Oppo Reno 11 5G',
    description: 'Modern sunglasses with UV protection.',
    old:'₹30,999',
    price: '₹27,999',
    image: 'https://m.media-amazon.com/images/I/61Gq6YKRQlL._SL1000_.jpg',
    altText: 'Product 3 Image',
},

];

const Offers = () => {
  return (
    <>
    <Nav />
    <div class="smartphone1" style={{marginBottom:"160px"}} >
      <p style={{backgroundColor:'white',fontSize:'20px',fontWeight:'600',margin:'20px'}}>Offers on Smart Phones</p>
    <div className="product-grid1" style={{marginBottom:"30px"}}>
      {products.map((product) => (
        <div className="product-card1" key={product.id}>
          <img src={product.image} alt={product.altText} class="product-image" />
          <div className="product-info1">
            <h3 className="product-name1">{product.name}</h3>
            <p className="product-old">{product.old}</p>
            <p className="product-price1">{product.price}</p>
            <button className="add-to-cart-btn1">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
};
export default Offers;