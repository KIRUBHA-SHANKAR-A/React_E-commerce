import React from 'react';
import axios from 'axios'
import './electronics.css';

const products = [
  {
    id: 6,
    name: 'Fire-Boult Smart Watch',
    description: 'Modern sunglasses with UV protection.',
    price: 1199,
    image: 'https://m.media-amazon.com/images/I/41n7XAvtKhL._SX300_SY300_QL70_FMwebp_.jpg',
    altText: 'Product 1 Image',
  },
  {
    id: 7,
    name: 'Plum Coconut Shampoo',
    description: 'Modern sunglasses with UV protection.',
    price: 253,
    image: 'https://m.media-amazon.com/images/I/31ptaRoZ5AL._SX300_SY300_QL70_FMwebp_.jpg',
    altText: 'Product 2 Image',
  },
  {
    id: 8,
    name: 'boAt Airdopes 311 Pro',
    description: 'Modern sunglasses with UV protection.',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/31tKtKPIkWL._SX300_SY300_QL70_FMwebp_.jpg',
    altText: 'Product 3 Image',
  },
  {
    id: 9,
    name: 'Prestige Electric Kettle',
    description: 'Modern sunglasses with UV protection.',
    price: 699,
    image: 'https://m.media-amazon.com/images/I/31gllQBI+FL._SY300_SX300_.jpg',
    altText: 'Product 4 Image',
  },
  {
    id: 10,
    name: 'DEBY Leather Braided Basket',
    description: 'Modern sunglasses with UV protection.',
    price: 11810,
    image: 'https://m.media-amazon.com/images/I/513ulm34XHL._SX679_.jpg',
    altText: 'Product 5 Image',
  },
];


const Electronics = () => {
  const addToCart = async (product) => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image, // Include image in the cart item
      quantity: 1,
    };

    try {
      await axios.post('http://localhost:3003/carts', cartItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // alert(`${product.name} added to cart successfully!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="smartphone">
      <p style={{backgroundColor:'white',fontSize:'20px',fontWeight:'600',margin:'20px'}}>
        Best Deals on Smart Phones
      </p>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.altText} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)} // Pass product to addToCart
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import './r.css';
// // import './ra.css';
// function App1() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };
//   return (
//     <div className='w-3/4 m-auto'>
//       <div className="mt-20">
//       <Slider {...settings}>
//         {data.map((d) => (
//           <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
//             <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
//               <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-4 p-4">
//               <p className="text-xl font-semibold">{d.name}</p>
//               <p className="text-center">{d.review}</p>
//               <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
      
//     </div>
//   );
// }

// const data = [
//   {
//     name: 'John Morgan',
//     img: '/students/John_Morgan.jpg',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     name: 'John Morgan',
//     img: '/students/John_Morgan.jpg',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     name: 'John Morgan',
//     img: '/students/John_Morgan.jpg',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     name: 'John Morgan',
//     img: '/students/John_Morgan.jpg',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     name: 'John Morgan',
//     img: '/students/John_Morgan.jpg',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
//   {
//     name: 'John Morgan',
//     img: '/students/John_Morgan.jpg',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//   },
  // {
  //   name: Ellie Anderson,
  //   img: /students/Ellie_Anderson.jpg,
  //   review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  // },
  // {
  //   name: Nia Adebayo,
  //   img: /students/Nia_Adebayo.jpg,
  //   review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  // },
  // {
  //   name: Rigo Louie,
  //   img: /students/Rigo_Louie.jpg,
  //   review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  // },
  // {
  //   name: Mia Williams,
  //   img: /students/Mia_Williams.jpg,
  //   review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  // },
  
// ];
// import React, { useRef } from 'react';
// import { Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// // Sample array of card data
// const cards = [
//   { id: 1, title: 'Card 1', description: 'Description for card 1', image: 'https://via.placeholder.com/150?text=Card+1' },
//   { id: 2, title: 'Card 2', description: 'Description for card 2', image: 'https://via.placeholder.com/150?text=Card+2' },
//   { id: 3, title: 'Card 3', description: 'Description for card 3', image: 'https://via.placeholder.com/150?text=Card+3' },
//   { id: 4, title: 'Card 4', description: 'Description for card 4', image: 'https://via.placeholder.com/150?text=Card+4' },
//   { id: 5, title: 'Card 5', description: 'Description for card 5', image: 'https://via.placeholder.com/150?text=Card+5' },
//   { id: 6, title: 'Card 6', description: 'Description for card 6', image: 'https://via.placeholder.com/150?text=Card+6' },
// ];

// const CardSlider = () => {
//   const sliderRef = useRef(null);

//   const scrollAmount = 200; // Adjust this value based on card width and spacing

//   const scrollLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <Box display="flex" alignItems="center" position="relative" width="100%">
//       <Button
//         onClick={scrollLeft}
//         sx={{ position: 'absolute', left: 0, zIndex: 1, backgroundColor: '#007BFF', color: 'white' }}
//       >
//         <ArrowBackIos />
//       </Button>
//       <Box
//         ref={sliderRef}
//         display="flex"
//         overflow="auto"
//         p={2}
//         sx={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap', width: '100%' }}
//       >
//         {cards.map((card) => (
//           <Card key={card.id} sx={{ display: 'inline-block', width: 200, marginRight: 2 }}>
//             <CardMedia
//               component="img"
//               image={card.image}
//               alt={card.title}
//               sx={{ height: 140 }}
//             />
//             <CardContent>
//               <Typography variant="h6">{card.title}</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {card.description}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//       <Button
//         onClick={scrollRight}
//         sx={{ position: 'absolute', right: 0, zIndex: 1, backgroundColor: '#007BFF', color: 'white' }}
//       >
//         <ArrowForwardIos />
//       </Button>
//     </Box>
//   );
// };

// export default CardSlider;
