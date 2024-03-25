import { CaretDownFilled, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { Badge, Dropdown, Input, Select } from "antd";
import Logo from "../../Assets/Images/Menu/logo.png";
import country1 from "../../Assets/Images/Country/1.jpg";
import country2 from "../../Assets/Images/Country/2.jpg";
import country3 from "../../Assets/Images/Country/3.jpg";
import country4 from "../../Assets/Images/Country/4.jpg";
import country5 from "../../Assets/Images/Country/5.jpg";
import country6 from "../../Assets/Images/Country/6.jpg";
import country7 from "../../Assets/Images/Country/7.jpg";
import country8 from "../../Assets/Images/Country/8.jpg";
import country9 from "../../Assets/Images/Country/9.jpg";
import country10 from "../../Assets/Images/Country/10.jpg";
import country11 from "../../Assets/Images/Country/11.jpg";
import country12 from "../../Assets/Images/Country/12.jpg";
import MegaMenu from "./MegaMenu";

const { Option } = Select;

function Header() {
  const LangageSelect = [
    {
      value: "a",
      label: "English",
      image: country1,
    },
    {
      value: "b",
      label: "اللغة العربية",
      image: country2,
    },
    {
      value: "c",
      label: "Español",
      image: country3,
    },
    {
      value: "d",
      label: "Français",
      image: country4,
    },
    {
      value: "e",
      label: "Deutsch",
      image: country5,
    },
    {
      value: "f",
      label: "Türkçe",
      image: country6,
    },
    {
      value: "g",
      label: "Italiano",
      image: country7,
    },
    {
      value: "h",
      label: "Português PT",
      image: country8,
    },
    {
      value: "i",
      label: " Polski",
      image: country9,
    },
    {
      value: "j",
      label: " Română",
      image: country10,
    },
    {
      value: "k",
      label: " Русский",
      image: country11,
    },
    {
      value: "l",
      label: "  Nederlands",
      image: country12,
    },
  ];

  const CurrencySelect = [
    { value: "a", label: "USA $" },
    { value: "c", label: "EUR €" },
  ];
  const items = [
    {
      label: <a href="/login">Sign In</a>,
      key: '0',
    },
  ];
  return (
    <div className="header_page">
      <div className="bg-bgGray">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center py-1">
            <p className="text-sm capitalize mb-0">
              Get 30% Off On Selected Items
            </p>
            <div className="flex gap-5 items-center">
              <div>
                <Select
                  popupClassName="headerPopup"
                  autoFocus={false}
                  defaultValue="a"
                  className="commonSearch"
                  suffixIcon={<CaretDownFilled />}
                >
                  {LangageSelect.map((option) => (
                    <Option key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <img
                          src={option.image}
                          alt="Flag"
                          className="w-5 h-auto"
                        />
                        {option.label}
                      </div>
                    </Option>
                  ))}
                </Select>
                <Select
                  className="commonSearch"
                  suffixIcon={<CaretDownFilled />}
                  defaultValue="a"
                  options={CurrencySelect}
                />
              </div>
              <div className="text-sm cursor-pointer hover:text-primaryColor">
                Compare
              </div>
              <div className="text-sm cursor-pointer hover:text-primaryColor">
                Wishlist
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center  h-[70px]">
          <div className="logo flex items-center">
            <img src={Logo} alt="images" className="w-[60px]" />
            <div className="font-semibold text-lg">AV Sore</div>
          </div>
          <div className="w-[60%]">
            <Input.Group compact className="commonSearch">
              <Select defaultValue="a" className="w-[25%]">
                <Option value="a">All Category</Option>
                <Option value="b">.jp</Option>
                <Option value="c">.cn</Option>
                <Option value="d">.org</Option>
              </Select>
              <Input
                className="w-[60%]"
                placeholder="Search everything at AV Store"
              />
              <div className="w-[20%] h-[48px] bg-White !rounded-r-full flex justify-end">
                <button className="bg-secondaryColor text-sm font-semibold uppercase w-10 h-[48px] w-full !rounded-r-full">
                  Search
                </button>
              </div>
            </Input.Group>
          </div>
          <div className="flex gap-8 items-center">
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <div className="flex items-center cursor-pointer group/icon gap-3">
                <div className="border group-hover/icon:text-primaryColor rounded-full text-lg w-10 h-10 flex justify-center items-center">
                  <UserOutlined />
                </div>
                <span className="font-medium text-sm">My Account</span>
              </div>
            </Dropdown>
            <div className="flex items-center gap-3 cursor-pointer group/icon">
              <Badge className="commonBadge" count={5} color="#F2273D">
                <div className="border group-hover/icon:text-primaryColor rounded-full text-lg w-10 h-10 flex justify-center items-center">
                  <ShoppingCartOutlined />
                </div>
              </Badge>
              <span className="font-medium text-sm">$0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primaryColor border-y border-y-[0.5px] border-White py-2">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-5 items-center text-White">
              <div className="flex text-primaryText items-center gap-2 cursor-pointer bg-secondaryColor py-1.5 px-3 rounded-md">
                <MegaMenu />
              </div>
              <div className="cursor-pointer">
                <span className=" text-sm">Hot Offers</span>
              </div>
              <div className="cursor-pointer">
                <span className=" text-sm">Gift boxes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
