import React from "react";
import ElectronicsImage from "../../../Assets/Images/Banner/electronics.png";

function Banner() {
  return (
    <div className="flex gap-5">
      <div className="w-[20%]">
        <ul className=" flex flex-col gap-5 ">
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Baby’s & Toys</li>
            <li>Sports & Outdoor</li>
            <li>Medicine</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="w-[80%]">
        <div className="h-[350px]">
            <img src={ElectronicsImage} alt="images" className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
