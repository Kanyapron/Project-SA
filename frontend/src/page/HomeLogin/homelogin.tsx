import { useState, useEffect } from "react";
import { PRODUCTS } from "../../Product";
import { Course } from "./product";

import brandner1 from "../../assets/brandner.png";
import brandner2 from "../../assets/Brandner2.png";
import brandner3 from "../../assets/Brandner3.png";

import icons1 from "../../assets/icons/book.png";
import icons2 from "../../assets/icons/pen.png";
import icons3 from "../../assets/icons/shoe.png";
import icons4 from "../../assets/icons/electronics.png";
import icons5 from "../../assets/icons/shirt.png";
import icons6 from "../../assets/icons/skirt.png";
import icons7 from "../../assets/icons/pants.png";
import "../Home/home.css";
import NavbarLogin from "./NavbarLogin";



const imageArray = [brandner1, brandner2, brandner3];

const HomeLogin = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((Index) =>
        Index === imageArray.length - 1 ? 0 : Index + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (<>

    <div className="home">
      <NavbarLogin/>
      <div className="box-page">
        <center>
          <img src={imageArray[currentImageIndex]} alt="brandner" />
        </center>
      </div>
      <div className="box-product">
        <img src={icons1} alt="icon1" />
        <img src={icons2} alt="icon2" />
        <img src={icons3} alt="icon3" />
        <img src={icons4} alt="icon4" />
        <img src={icons5} alt="icon5" />
        <img src={icons6} alt="icon6" />
        <img src={icons7} alt="icon7" />
      </div>

      <div className="Naw-arrivals">
        <p>NEW ARRIVALS</p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Course key={product.id} data={product} />
        ))}
      </div>

    </div>

  </>);
};

export default HomeLogin;
