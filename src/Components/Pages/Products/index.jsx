import React, { useState } from "react";
import {
  Breadcrumb,
  Checkbox,
  Collapse,
  Select,
  Slider,
  Segmented,
  Rate,
} from "antd";
import {
  CaretDownFilled,
  RightOutlined,
  AppstoreOutlined,
  BarsOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import ProductImage1 from "../../../Assets/Images/Products/1.png";
import Header from "../../Shared/Header";
import useNavigation from "../../../PageRouting/HandleNavigator";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const categories = [
  "Men",
  "Women",
  "Kids",
  "Accessories",
  "Electronics",
  "Smart Phones",
];

const Catergoies = (
  <div className="flex flex-col">
    {categories.map((category) => (
      <Checkbox
        className="commonCheckbox"
        key={category}
        checked={category === "Smart Phones"}
      >
        {category}
      </Checkbox>
    ))}
    <div className="text-primaryColor text-xs cursor-pointer mt-2">
      Show 10+ More
    </div>
  </div>
);

const branded = ["Samsung", "Apple", "Google Pixel", "Huawei", "Poco", "Vivo"];

const Branded = (
  <div className="flex flex-col">
    {branded.map((brand) => (
      <Checkbox
        className="commonCheckbox"
        key={brand}
        checked={brand === "Samsung" || brand === "Apple" || brand === "Poco"}
      >
        {brand}
      </Checkbox>
    ))}
    <div className="text-primaryColor text-xs cursor-pointer mt-2">
      Show 10+ More
    </div>
  </div>
);

const rating = ["4★ & above", "3★ & above", "2★ & above", "1★ & above"];
const Rating = (
  <div className="flex flex-col">
    {rating.map((rate) => (
      <Checkbox
        className="commonCheckbox"
        key={rate}
        checked={rate === "4★ & above"}
      >
        {rate}
      </Checkbox>
    ))}
  </div>
);
const discount = [
  "50% or more",
  "40% or more",
  "30% or more",
  "20% or more",
  "10% or more",
];
const Discount = (
  <div className="flex flex-col">
    {discount.map((offer) => (
      <Checkbox className="commonCheckbox" key={offer}>
        {offer}
      </Checkbox>
    ))}
  </div>
);
const avaliable = ["Exclude Out of Stock"];
const Availability = (
  <div className="flex flex-col">
    {avaliable.map((avail) => (
      <Checkbox className="commonCheckbox" key={avail}>
        {avail}
      </Checkbox>
    ))}
  </div>
);
const offered = ["Buy More, Save More", "No Cost EMI", "Special Price"];
const Offers = (
  <div className="flex flex-col">
    {offered.map((off) => (
      <Checkbox className="commonCheckbox" key={off}>
        {off}
      </Checkbox>
    ))}
  </div>
);
const PriceRange = () => {
  const minPrice = [
    {
      value: "a",
      label: "min",
    },
    {
      value: "b",
      label: "$10",
    },
    {
      value: "c",
      label: "$50",
    },
    {
      value: "d",
      label: "$100",
    },
    {
      value: "e",
      label: "$300",
    },
    {
      value: "f",
      label: "$500+",
    },
  ];
  const maxPrice = [
    {
      value: "a",
      label: "max",
    },
    {
      value: "b",
      label: "$500",
    },
    {
      value: "c",
      label: "$1000",
    },
    {
      value: "d",
      label: "$2000",
    },
    {
      value: "e",
      label: "$3000",
    },
    {
      value: "f",
      label: "$5000+",
    },
  ];
  return (
    <div>
      <Slider className="commonRange" range defaultValue={[20, 50]} />
      <div className="flex justify-between items-center w-full">
        <Select className="w-[40%]" defaultValue="a" options={minPrice} />
        <span className="w-[20%] text-center text-secondaryText">to</span>
        <Select className="w-[40%]" defaultValue="a" options={maxPrice} />
      </div>
    </div>
  );
};

function Product() {
  const items = [
    {
      key: "1",
      label: "Product Catergoies",
      children: Catergoies,
    },
    {
      key: "2",
      label: "Filter by Price",
      children: <PriceRange />,
    },
    {
      key: "3",
      label: "Brand",
      children: Branded,
    },
    {
      key: "4",
      label: "Customer Rating",
      children: Rating,
    },
    {
      key: "5",
      label: "Discount",
      children: Discount,
    },
    {
      key: "6",
      label: "Availability",
      children: Availability,
    },
    {
      key: "7",
      label: "Offers",
      children: Offers,
    },
  ];

  const FilterItems = [
    {
      value: "a",
      label: "Popularity",
    },
    {
      value: "b",
      label: "Low to High",
    },
    {
      value: "c",
      label: "High to Low",
    },
    {
      value: "d",
      label: "Newest First",
    },
    {
      value: "e",
      label: "Discount",
    },
  ];
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  // const { navigateTo } = useNavigation();

  const location = useLocation();
  const item = location.state.item;
  console.log(item,"????,item")
  
  const history = useHistory();

  const navigateTo = (route, data) => {
    history.push(route, data);
  };
  return (
    <div>
      <Header />
      <main className="w-[95%] mx-auto">
        <div className="bg-White mt-5 py-2 px-4">
          <Breadcrumb
            className="commonBreadcrumb"
            separator={<RightOutlined />}
            items={[
              {
                title: <div className="cursor-pointer hover:text-primaryColor" onClick={() => navigateTo("/")}>Home</div>,
              },
              {
                title: <div className="cursor-pointer hover:text-primaryColor">Smart Phones</div>,
              },
            ]}
          />
        </div>
        <div className="flex gap-5 mt-5">
          <div className="w-[20%]">
            <div className="bg-White p-3 rounded-md">
              <div className="flex justify-between items-center border-b border-b-borderColor pb-3">
                <div className="uppercase font-semibold">Filter</div>
                <div className="text-primaryColor text-xs cursor-pointer hover:underline font-medium">
                  Clear All
                </div>
              </div>
              <Collapse
                className="commonCollapse"
                expandIconPosition="end"
                items={items}
                defaultActiveKey={["1", "2", "3", "4", "5"]}
              />
            </div>
          </div>
          <div className="w-[80%]">
            <div className="bg-White p-3 rounded-md">
              <div className="flex justify-between items-center">
                <div className="text-sm text-">
                  12,911 items in <span className="font-semibold">Mobiles</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Checkbox className="text-sm commonCheckbox1">
                    Verified Only
                  </Checkbox>
                  <Select
                    className="commonSelect1"
                    defaultValue="a"
                    options={FilterItems}
                    suffixIcon={<CaretDownFilled />}
                  />
                  <Segmented
                    className="commonSegment"
                    options={[
                      {
                        value: "List",
                        icon: <BarsOutlined />,
                      },
                      {
                        value: "Kanban",
                        icon: <AppstoreOutlined />,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer"
                  onClick={() => navigateTo("/product-details", { item })}
                >
                  <div className="relative flex justify-center border-b-borderColor border-b p-3">
                    <img src={ProductImage1} alt="images" className="w-[180px]" />
                    <div className="absolute right-5 cursor-pointer">
                      {isInWishlist ? (
                        <HeartFilled
                          onClick={toggleWishlist}
                          className="text-secondaryColor"
                          style={{ fontSize: "24px", cursor: "pointer" }}
                        />
                      ) : (
                        <HeartOutlined
                          onClick={toggleWishlist}
                          className="text-secondaryText"
                          style={{ fontSize: "24px", cursor: "pointer" }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className={isHovered ? "hidden" : "block"}>
                      <div className="font-medium">
                        {item.name}
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        <Rate className="commonRate" allowHalf defaultValue={item.rating} />
                        <span className="text-xs text-secondaryText font-medium">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    {isHovered && (
                      <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                        Add to Card
                      </button>
                    )}
                    <div className="flex gap-3 items-center mt-2">
                      <h6 className="font-medium text-lg mb-0">{item.discountedPrice}</h6>
                      <p className="text-secondaryText text-xs  mb-0">
                        <span className="line-through text-base">{item.originalPrice}</span>{" "}
                        (Save {item.savings})
                      </p>
                      <p className="mb-0 text-sm font-medium text-Green">{item.discount}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
