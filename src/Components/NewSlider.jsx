import React from 'react';
import Slider from 'react-slick';
import './NewSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NewSlider = () => {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    background:"transparent",
  };

  const images = [
    'https://www.bigbasket.com/media/uploads/banner_images/hp_diwali_1600x460_181024_162V1eu.jpg?tr=w-1920,q=80',    
    'https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26112.jpg?tr=w-1920,q=80' ,
    'https://www.bigbasket.com/media/uploads/banner_images/IBBN092113357-26108.jpg?tr=w-1920,q=80'  

  ];

  return (
    <div style={{  backgroundColor: "transparent",marginTop:"30px",marginBottom:"50px",marginLeft:"120px",borderRadius:'25px',width:"1300px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div style={{backgroundColor:"transparent"}} key={index}>
            <img  src={image} alt={`Slide ${index + 1}`} style={{width: '100%', height: '600px',borderRadius:'40px',backgroundColor:"transparent" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewSlider;