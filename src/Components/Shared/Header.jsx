import { CaretDownFilled, SearchOutlined } from "@ant-design/icons";
import React from "react";
import { Badge, Input, Select } from "antd";
import Logo from "../../Assets/Images/Menu/logo.svg";
import WishlistIcon from "../../Assets/Images/Menu/Wishlist.svg";
import ProfileIcon from "../../Assets/Images/Menu/profile.svg";
import CartIcon from "../../Assets/Images/Menu/Cart.svg";
import MenuIcons from "../../Assets/Images/Menu/menu.svg";
import US from "../../Assets/Images/Country/us.jpg";
import Russia from "../../Assets/Images/Country/russia.jpg";
import Italy from "../../Assets/Images/Country/italy.jpg";
import German from "../../Assets/Images/Country/germany.jpg";
import Spain from "../../Assets/Images/Country/spain.jpg";

const { Option } = Select;

function Header() {
  const LangageSelect = [
    {
      value: "a",
      label: "English, USD",
    },
    {
      value: "b",
      label: "Lucy",
    },
    {
      value: "c",
      label: "yiminghe",
    },
  ];

  const CountrySelect = [
    { value: "country1", image: US },
    { value: "country2", image: Russia },
    { value: "country3", image: Italy },
    { value: "country4", image: German },
    { value: "country5", image: Spain },
  ];
  return (
    <div className="header_page bg-primaryColor">
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center  h-[70px]">
          <div className="logo ">
            <img src={Logo} alt="images" className="w-[130px]" />
          </div>
          <div className="w-[60%]">
            <Input.Group compact className="commonSearch">
              <Input
                className="w-[60%]"
                placeholder="Search everything at AV Store"
              />
              <Select defaultValue="a" className="w-[25%]">
                <Option value="a">All Category</Option>
                <Option value="b">.jp</Option>
                <Option value="c">.cn</Option>
                <Option value="d">.org</Option>
              </Select>
              <div className="w-[10%] h-[38px] bg-White !rounded-r-full flex justify-end">
                <button className="bg-secondaryColor w-10 h-[38px] w-full !rounded-full">
                  <SearchOutlined />
                </button>
              </div>
            </Input.Group>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex flex-col items-center">
              <img src={ProfileIcon} alt="images" className="w-6" />
              <span className="text-White text-[11px]">Profile</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={WishlistIcon} alt="images" className="w-6" />
              <span className="text-White text-[11px]">Wishlist</span>
            </div>
            <div className="flex flex-col items-center">
              <Badge className="commonBadge" count={5} color="#FFC11F">
                <img src={CartIcon} alt="images" className="w-6" />
              </Badge>
              <span className="text-White text-[11px]">$0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-y-[0.5px] border-White py-2">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center text-White">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src={MenuIcons} alt="images" className="w-5" />
                <span className=" text-sm">All Category</span>
              </div>
              <div className="cursor-pointer">
                <span className=" text-sm">Hot Offers</span>
              </div>
              <div className="cursor-pointer">
                <span className=" text-sm">Gift boxes</span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Select
                defaultValue="a"
                className="commonSearch"
                options={LangageSelect}
                suffixIcon={<CaretDownFilled />}
              />
              <div className="flex items-center">
                <span className="text-White text-sm">Ship to</span>
                <Select
                  popupClassName="headerPopup"
                  autoFocus={false}
                  defaultValue="country1"
                  className="commonSearch"
                  suffixIcon={<CaretDownFilled />}
                >
                  {CountrySelect.map((option) => (
                    <Option key={option.value} value={option.value}>
                      <img src={option.image} alt="Flag" className="w-5" />
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
