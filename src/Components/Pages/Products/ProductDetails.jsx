import React, { useState } from "react";
import Layouts from "../../Layouts";
import { Breadcrumb, Rate } from "antd";
import { CheckOutlined, RightOutlined } from "@ant-design/icons";
import ProductImage from "../../../Assets/Images/Products/1.png";
import ProductImage1 from "../../../Assets/Images/Products/1.1.jpeg";
import ProductImage2 from "../../../Assets/Images/Products/1.2.jpeg";
import ProductImage3 from "../../../Assets/Images/Products/1.3.jpeg";
import ProductImage4 from "../../../Assets/Images/Products/1.4.jpeg";
import ProductImage5 from "../../../Assets/Images/Products/1.5.jpeg";
import ProductImage6 from "../../../Assets/Images/Products/1.6.jpeg";
import MessageIcon from "../../../Assets/Images/Icons/message.svg";
import SoldIcon from "../../../Assets/Images/Icons/shopping_basket.svg";
import Info from "../../../Assets/Images/Icons/Info.svg";

function ProductDetails() {
  const productImages = [
    ProductImage,
    ProductImage1,
    ProductImage2,
    ProductImage3,
    ProductImage4,
    ProductImage5,
    ProductImage6,
  ];
  const [selectProductimages, setSelectProductimage] = useState(
    productImages[0]
  );

  const handleImageClick = (imageUrl) => {
    setSelectProductimage(imageUrl);
  };
  return (
    <Layouts>
      <div>
        <Breadcrumb
          separator={<RightOutlined />}
          items={[
            {
              title: "Home",
            },
            {
              title: "Smart Phones",
            },
            {
              title: "Apple",
            },
          ]}
        />
      </div>
      <div className="bg-White p-5 rounded-md mt-5">
        <div className="flex gap-5">
          <div className="w-[35%]">
            <div className="mainimage border rounded-md border-borderColor p-2 flex justify-center h-[350px]">
              <img src={selectProductimages} alt="images" className="h-full" />
            </div>
            <div className="flex gap-3 mt-5">
              {productImages.map((imageUrl, index) => (
                <div
                  onClick={() => handleImageClick(imageUrl)}
                  key={index}
                  className={`cursor-pointer border rounded-md p-2 flex justify-center w-[50px] h-[50px] ${
                    imageUrl === selectProductimages
                      ? "border-primaryText"
                      : "border-borderColor"
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt="images"
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[65%]">
            <div className="flex gap-5 w-full">
              <div className="w-[70%]">
                <div className="flex gap-1 text-Green text-sm">
                  <CheckOutlined />
                  <span>In Stock</span>
                </div>
                <h4 className="font-medium text-xl mt-2">
                  Apple iPhone 15 (Blue, 128 GB)
                </h4>
                <div className="flex gap-3 items-center mt-2">
                  <div className="flex gap-2 items-center">
                    <Rate className="commonRate" allowHalf defaultValue={4.5} />
                    <span className="text-xs text-secondaryText font-medium">
                      25,288
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-secondaryText rounded-full opacity-[0.5]"></span>
                  <div className="flex gap-2 items-center">
                    <img src={MessageIcon} alt="images" className="w-4" />
                    <span className="text-xs text-secondaryText">
                      32 reviews
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-secondaryText rounded-full opacity-[0.5]"></span>
                  <div className="flex gap-2 items-center">
                    <img src={SoldIcon} alt="images" className="w-4" />
                    <span className="text-xs text-secondaryText">153 sold</span>
                  </div>
                </div>
                <div className="flex gap-3 items-baseline mt-4">
                  <h6 className="font-semibold text-2xl mb-0">$99.50</h6>
                  <p className="text-secondaryText text-base  mb-0">
                    <span className="line-through text-lg">$118.00</span> (Save
                    $18.50)
                  </p>
                  <p className="mb-0 text-base font-medium text-Green">
                    10% Off
                  </p>
                </div>
                <div className="flex gap-2 items-baseline mt-2">
                  <div className="font-light text-sm mb-0">
                    <span className="font-semibold">$20/month</span> with
                  </div>
                  <img
                    src="https://cdn-assets.affirm.com/images/black_logo-white_bg.jpg"
                    alt="images"
                    className="w-10"
                  />
                  <div className="text-primaryColor text-xs cursor-pointer hover:underline">
                    Learn how
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-1 border-b pb-4">
                  <div className="font-light text-xs mb-0">
                    Price when purchased online
                  </div>
                  <img src={Info} alt="images" className="w-4 cursor-pointer" />
                </div>
                <div className="pt-4">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <div className="flex gap-3">
                        <div className="font-light text-base">
                          Color: <span className="font-medium">Red</span>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div className=" rounded-md cursor-pointer border-2 border-Green p-[0.5px]">
                           <div className="bg-[#F5092A] h-[40px] w-[40px] rounded-md"></div>
                        </div>
                        <div className="rounded-md cursor-pointer border-2 border-borderColor p-[0.5px]">
                          <div className="bg-[#073557] h-[40px] w-[40px] rounded-md"></div>
                        </div>
                        <div className=" rounded-md cursor-pointer border-2 border-borderColor p-[0.5px]">
                          <div className="bg-[#D4CFF1] h-[40px] w-[40px] rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%]"></div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default ProductDetails;
