import { useState, useEffect } from "react";
import { PRODUCTS } from "../../Product";
import { ItemCard } from "./product";

import banner1 from "../../assets/brandner.png";
import banner2 from "../../assets/Brandner2.png";
import banner3 from "../../assets/Brandner3.png";

import categoryIcon1 from "../../assets/icons/book.png";
import categoryIcon2 from "../../assets/icons/pen.png";
import categoryIcon3 from "../../assets/icons/shoe.png";
import categoryIcon4 from "../../assets/icons/electronics.png";
import categoryIcon5 from "../../assets/icons/shirt.png";
import categoryIcon6 from "../../assets/icons/skirt.png";
import categoryIcon7 from "../../assets/icons/pants.png";


import "./home.css";
import Navbar from "../Component_home/Navbar";
import { Col } from "antd";


const bannerImages = [banner1, banner2, banner3];

const HomePage = () => {

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBannerIndex((index) =>
        index === bannerImages.length - 1 ? 0 : index + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (<>
    
    <div className="home-main-page">
      <Navbar/>  
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className="banner-section">
          <center>
            <img src={bannerImages[activeBannerIndex]} alt="banner" />
          </center>
        </div>
        <div className="category-section">
          <img src={categoryIcon1} alt="category1" onClick={}/>
          <img src={categoryIcon2} alt="category2" />
          <img src={categoryIcon3} alt="category3" />
          <img src={categoryIcon4} alt="category4" />
          <img src={categoryIcon5} alt="category5" />
          <img src={categoryIcon6} alt="category6" />
          <img src={categoryIcon7} alt="category7" />
        </div>

        <div className="new-items-header">
          <p>NEW ITEMS</p>
        </div>

        <div className="item-list">
          {PRODUCTS.map((product) => (
            <ItemCard key={product.id} data={product} />
          ))}
        </div>
        </Col>
    </div>
  </>);
};

export default HomePage;
