import ImageSlider from "./ImageSlider";
const Slider = () => {
  const slides = [
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg", title: "beach" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/Sports_Shoes/Aug/GW/ATF/Unrec/Cat3_v2/499_3000._CB565522588_.jpg", title: "boat" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/urec/hero/Under1499_Tallhero_3000x1200._CB568928188_.jpg", title: "forest" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg", title: "city" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/September/GFD/GW/Hero/Desktop/5298-Sports---GFD-Sept-GW24_Dumbbells_3000x1200_kotak._CB564372999_.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "100%",
    height: "650px",
  };
  return (
    <div style={{margin:'60px 80px'}}>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;