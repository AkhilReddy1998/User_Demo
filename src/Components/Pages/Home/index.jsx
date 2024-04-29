import React, { useState, useRef, useEffect } from "react";
import Header from "../../Shared/Header";
import SupportIcons from "../../../Assets/Images/Icons/support.svg";
import GuaranteeIcons from "../../../Assets/Images/Icons/guarantee.svg";
import GiftsIcons from "../../../Assets/Images/Icons/gifts.svg";
import ShipIcons from "../../../Assets/Images/Icons/ship.svg";
import ProductImage1 from "../../../Assets/Images/Products/1.png";
import ProductImage2 from "../../../Assets/Images/Products/vitaminwater.png";
import ProductImage3 from "../../../Assets/Images/Products/polandspring.png";
import ProductImage4 from "../../../Assets/Images/Products/patties.png";
import ProductImage5 from "../../../Assets/Images/Products/takies.png";
import ProductImage6 from "../../../Assets/Images/Products/1.png";
import BannerImage1 from "../../../Assets/Images/Banner/offerbanner-1.png";
import BannerImage2 from "../../../Assets/Images/Banner/offerbanner-2.png";
import BannerImage3 from "../../../Assets/Images/Banner/cbanner-1.png";
import CategoryImage1 from "../../../Assets/Images/Category/baverages.png";
import CategoryImage2 from "../../../Assets/Images/Category/snacks.png";
import CategoryImage3 from "../../../Assets/Images/Category/forzen.png";
import CategoryImage4 from "../../../Assets/Images/Category/gum.png";
import CategoryImage5 from "../../../Assets/Images/Category/health & beauty.png";
import CategoryImage6 from "../../../Assets/Images/Category/disposables.png";
import Carousel from "react-multi-carousel";
import SpecialImage from "../../../Assets/Images/Banner/special-Gift.jpeg";
import { Card, Rate, message } from "antd";
import {
    HeartOutlined,
    HeartFilled,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";
import CategoryProduct from "./CategoryProduct";
import HomeBanner from "./Banner";
import useNavigation from "../../../PageRouting/HandleNavigator";
import axios from "axios";
import { base_url } from "../../BaseUrl/Url";
import { Link } from "react-router-dom";

function Home() {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { navigateTo } = useNavigation();
    const [isHovered, setIsHovered] = useState(false);
    const [data, setData] = useState([])

    const toggleWishlist = () => {
        setIsInWishlist(!isInWishlist);
    };
    const carouselRef = useRef(null);
    const carouselRefTwo = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isBeginningTwo, setIsBeginningTwo] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isEndTwo, setIsEndTwo] = useState(false);

    const handleBeforeChange = (prevIndex, currentIndex) => {
        setIsBeginning(currentIndex === 0);
        setIsEnd(currentIndex === responsive.mobile.items - 1);
    };

    const handleBeforeChangeTwo = (prevIndex, currentIndex) => {
        setIsBeginningTwo(currentIndex === 0);
        setIsEndTwo(currentIndex === responsiveTwo.mobile.items - 1);
    };

    const handleNextClick = () => {
        carouselRef.current.next();
    };
    const handleNextClickTwo = () => {
        carouselRefTwo.current.next();
    };

    const handlePrevClick = () => {
        carouselRef.current.previous();
    };
    const handlePrevClickTwo = () => {
        carouselRefTwo.current.previous();
    };

    useEffect(() => {
        async function ProductList() {
            try {
                await axios
                    .post(`${base_url}/product/toplist`, {
                        // page: currentPage,
                        page: 1,
                        limit: 10,
                    })
                    .then((res) => {
                        console.log(res.data.data.list, "????,list")
                        if (res.data.success === true) {
                            setData(res.data.data.list)
                        }
                    });
            } catch (err) {
                if (err.response) {
                    // The client was given an error response (5xx, 4xx)
                    console.log("Error", err.response);
                } else if (err.request) {
                    console.log("Error", err.request);
                    message.error("Network Error");
                    // The client never received a response, and the request was never left
                } else {
                    // Anything else
                    console.log("Error", err.message);
                }
            }
        }
        ProductList();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const responsiveTwo = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div>
            <Header />
            <main className="w-[95%] mx-auto">
                <section className="flex gap-5 w-full mt-6">
                    <HomeBanner />
                </section>
                <section className="grid grid-cols-4 gap-5 my-10">
                    <div className="group/borderColor bg-White p-5 rounded-md flex items-center gap-4">
                        <div className="group-hover/borderColor:border-primaryColor border bg-borderColor rounded-full w-[65px] h-[65px] p-3">
                            <img src={SupportIcons} alt="images" />
                        </div>
                        <div className="">
                            <h5 className="text-lg mb-2">24/7 Free Support</h5>
                            <p className="text-xs text-secondaryText mb-0 font-medium">
                                Online Support 24/7
                            </p>
                        </div>
                    </div>
                    <div className="group/borderColor bg-White p-5 rounded-md flex items-center gap-4">
                        <div className="group-hover/borderColor:border-primaryColor border bg-borderColor rounded-full w-[65px] h-[65px] p-3">
                            <img src={GuaranteeIcons} alt="images" />
                        </div>
                        <div className="">
                            <h5 className="text-lg mb-2">Money Back Guarantee</h5>
                            <p className="text-xs text-secondaryText mb-0 font-medium">
                                100% Secure Payment
                            </p>
                        </div>
                    </div>
                    <div className="group/borderColor bg-White p-5 rounded-md flex items-center gap-4">
                        <div className="group-hover/borderColor:border-primaryColor border bg-borderColor rounded-full w-[65px] h-[65px] p-3">
                            <img src={GiftsIcons} alt="images" />
                        </div>
                        <div className="">
                            <h5 className="text-lg mb-2">Special Gift Cards</h5>
                            <p className="text-xs text-secondaryText mb-0 font-medium">
                                Give The Perfect Gift
                            </p>
                        </div>
                    </div>
                    <div className="group/borderColor bg-White p-5 rounded-md flex items-center gap-4">
                        <div className="group-hover/borderColor:border-primaryColor border bg-borderColor rounded-full w-[65px] h-[65px] p-3">
                            <img src={ShipIcons} alt="images" />
                        </div>
                        <div className="">
                            <h5 className="text-lg mb-2">Worldwide Shipping</h5>
                            <p className="text-xs text-secondaryText mb-0 font-medium">
                                On Order Over $49
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mb-5">
                    <div className="flex justify-between items-center border-b border-b-borderDark pb-2 mb-10">
                        <h3 className="uppercase text-xl font-semibold">Top Product</h3>
                        <div className="flex gap-4 items-center">
                            <h3 className="uppercase text-primaryColor cursor-pointer text-sm mb-0">
                                Featured
                            </h3>
                            <h3 className="uppercase cursor-pointer text-sm mb-0">Latest</h3>
                            <div className="custom-arrows gap-3 flex ">
                                <button
                                    onClick={handlePrevClick}
                                    className={`custom-left-arrow bg-White rounded-md w-6 h-6 hover:bg-primaryColor hover:text-White`}
                                    disabled={isBeginning}
                                >
                                    <LeftOutlined />
                                </button>
                                <button
                                    onClick={handleNextClick}
                                    className={`custom-right-arrow bg-White rounded-md w-6 h-6 hover:bg-primaryColor hover:text-White`}
                                    disabled={isEnd}
                                >
                                    <RightOutlined />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Carousel
                        ref={carouselRef}
                        infinite={false}
                        autoPlay={false}
                        //   autoPlaySpeed={4000}
                        //   customTransition="all .5"
                        //   transitionDuration={500}
                        containerClass="carousel-container"
                        responsive={responsive}
                        beforeChange={handleBeforeChange}
                        itemClass="carousel-item-padding-40-px"
                    >
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <div key={index}>
                                    <Link
                                        to={{ pathname: "/products", state: { item: item } }}
                                        className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                                    >
                                        <div
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                            className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                                        >
                                            <div className="relative flex justify-center border-b-borderColor border-b p-3">
                                                <img src={ProductImage1} alt="images" className="w-[180px]" /> {/* Assuming there's an 'image' property in your data */}
                                                <div className="absolute right-5 cursor-pointer">
                                                    {isInWishlist ? (
                                                        <HeartFilled
                                                            onClick={toggleWishlist}
                                                            className="text-primaryColor"
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
                                                        <Rate className="commonRate" allowHalf defaultValue={item.rating} /> {/* Assuming there's a 'rating' property in your data */}
                                                        <span className="text-xs text-secondaryText font-medium">
                                                            {item.price}
                                                        </span> {/* Assuming there's a 'price' property in your data */}
                                                    </div>
                                                </div>
                                                {isHovered && (
                                                    <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                                                        Add to Cart
                                                    </button>
                                                )}
                                                <div className="flex gap-3 items-center mt-2">
                                                    <h6 className="font-medium text-lg mb-0">{item.discountedPrice}</h6> {/* Assuming there's a 'discountedPrice' property in your data */}
                                                    <p className="text-secondaryText text-xs  mb-0">
                                                        <span className="line-through text-base">{item.originalPrice}</span> {/* Assuming there's an 'originalPrice' property in your data */}
                                                        (Save {item.savings}) {/* Assuming there's a 'savings' property in your data */}
                                                    </p>
                                                    <p className="mb-0 text-sm font-medium text-Green">{item.discount}% Off</p> {/* Assuming there's a 'discount' property in your data */}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p style={{ fontWeight: "bold", color: "red" }}>Data Unavailable</p>
                        )}

                        {/* <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                        >
                            <div className="relative flex justify-center border-b-borderColor border-b p-3">
                                <img src={ProductImage2} alt="images" className="w-[180px]" />
                                <div className="absolute right-5 cursor-pointer">
                                    {isInWishlist ? (
                                        <HeartFilled
                                            onClick={toggleWishlist}
                                            className="text-primaryColor"
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
                                    Vitamin Water Energy (20 CT)
                                    </div>
                                    <div className="flex gap-2 items-center mt-2">
                                        <Rate className="commonRate" allowHalf defaultValue={4.5} />
                                        <span className="text-xs text-secondaryText font-medium">
                                            1,500
                                        </span>
                                    </div>
                                </div>
                                {isHovered && (
                                    <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                                        Add to Cart 
                                    </button>
                                )}
                                <div className="flex gap-3 items-center mt-2">
                                    <h6 className="font-medium text-lg mb-0">$17.99</h6>
                                    <p className="text-secondaryText text-xs  mb-0">
                                        <span className="line-through text-base">$20.99</span>{" "}
                                        (Save $3.00)
                                    </p>
                                    <p className="mb-0 text-sm font-medium text-Green">10% Off</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                        >
                            <div className="relative flex justify-center border-b-borderColor border-b p-3">
                                <img src={ProductImage3} alt="images" className="w-[180px]" />
                                <div className="absolute right-5 cursor-pointer">
                                    {isInWishlist ? (
                                        <HeartFilled
                                            onClick={toggleWishlist}
                                            className="text-primaryColor"
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
                                    Poland Spring (16 oz/40 ct)
                                    </div>
                                    <div className="flex gap-2 items-center mt-2">
                                        <Rate className="commonRate" allowHalf defaultValue={4.5} />
                                        <span className="text-xs text-secondaryText font-medium">
                                            5,288
                                        </span>
                                    </div>
                                </div>
                                {isHovered && (
                                    <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                                        Add to Cart
                                    </button>
                                )}
                                <div className="flex gap-3 items-center mt-2">
                                    <h6 className="font-medium text-lg mb-0">$8.49</h6>
                                    <p className="text-secondaryText text-xs  mb-0">
                                        <span className="line-through text-base">$9.49</span>{" "}
                                        (Save $1.00)
                                    </p>
                                    <p className="mb-0 text-sm font-medium text-Green">5% Off</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                        >
                            <div className="relative flex justify-center border-b-borderColor border-b p-3">
                                <img src={ProductImage4} alt="images" className="w-[180px]" />
                                <div className="absolute right-5 cursor-pointer">
                                    {isInWishlist ? (
                                        <HeartFilled
                                            onClick={toggleWishlist}
                                            className="text-primaryColor"
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
                                    Tower Isle's Beef Patties (5 oz/50 ct)
                                    </div>
                                    <div className="flex gap-2 items-center mt-2">
                                        <Rate className="commonRate" allowHalf defaultValue={4.5} />
                                        <span className="text-xs text-secondaryText font-medium">
                                            2,500
                                        </span>
                                    </div>
                                </div>
                                {isHovered && (
                                    <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                                        Add to Cart
                                    </button>
                                )}
                                <div className="flex gap-3 items-center mt-2">
                                    <h6 className="font-medium text-lg mb-0">$53.99</h6>
                                    <p className="text-secondaryText text-xs  mb-0">
                                        <span className="line-through text-base">$63.99</span>{" "}
                                        (Save $10.00)
                                    </p>
                                    <p className="mb-0 text-sm font-medium text-Green">10% Off</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                        >
                            <div className="relative flex justify-center border-b-borderColor border-b p-3">
                                <img src={ProductImage5} alt="images" className="w-[180px]" />
                                <div className="absolute right-5 cursor-pointer">
                                    {isInWishlist ? (
                                        <HeartFilled
                                            onClick={toggleWishlist}
                                            className="text-primaryColor"
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
                                    Takis Fuego (3.25 oz/20 ct)
                                    </div>
                                    <div className="flex gap-2 items-center mt-2">
                                        <Rate className="commonRate" allowHalf defaultValue={4.5} />
                                        <span className="text-xs text-secondaryText font-medium">
                                            15,288
                                        </span>
                                    </div>
                                </div>
                                {isHovered && (
                                    <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                                        Add to Cart
                                    </button>
                                )}
                                <div className="flex gap-3 items-center mt-2">
                                    <h6 className="font-medium text-lg mb-0">$31.99</h6>
                                    <p className="text-secondaryText text-xs  mb-0">
                                        <span className="line-through text-base">$33.99</span>{" "}
                                        (Save $3.00)
                                    </p>
                                    <p className="mb-0 text-sm font-medium text-Green">10% Off</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="bg-White rounded-md border-[0.5px] border-borderColor cursor-pointer mx-3"
                        >
                            <div className="relative flex justify-center border-b-borderColor border-b p-3">
                                <img src={ProductImage6} alt="images" className="w-[180px]" />
                                <div className="absolute right-5 cursor-pointer">
                                    {isInWishlist ? (
                                        <HeartFilled
                                            onClick={toggleWishlist}
                                            className="text-primaryColor"
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
                                        Apple iPhone 15 (Blue, 128 GB)
                                    </div>
                                    <div className="flex gap-2 items-center mt-2">
                                        <Rate className="commonRate" allowHalf defaultValue={4.5} />
                                        <span className="text-xs text-secondaryText font-medium">
                                            25,288
                                        </span>
                                    </div>
                                </div>
                                {isHovered && (
                                    <button className="bg-primaryText h-10 w-full text-White rounded-md mb-">
                                        Add to Card
                                    </button>
                                )}
                                <div className="flex gap-3 items-center mt-2">
                                    <h6 className="font-medium text-lg mb-0">$99.50</h6>
                                    <p className="text-secondaryText text-xs  mb-0">
                                        <span className="line-through text-base">$118.00</span>{" "}
                                        (Save $18.50)
                                    </p>
                                    <p className="mb-0 text-sm font-medium text-Green">10% Off</p>
                                </div>
                            </div>
                        </div> */}
                    </Carousel>
                </section>
                <section className="inline-block my-10">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="beffect">
                            <img src={BannerImage1} alt="images" className="w-full h-full" />
                        </div>
                        <div className="beffect">
                            <img src={BannerImage2} alt="images" className="w-full h-full" />
                        </div>
                    </div>
                </section>
                <section className="mb-10">
                    <div className="flex justify-between items-center border-b border-b-borderDark pb-2 mb-10">
                        <h3 className="uppercase text-xl font-semibold">OUR CATEGORIES</h3>
                        <div className="custom-arrows gap-3 flex ">
                            <button
                                onClick={handlePrevClickTwo}
                                className={`custom-left-arrow bg-White rounded-md w-6 h-6 hover:bg-primaryColor hover:text-White`}
                                disabled={isBeginningTwo}
                            >
                                <LeftOutlined />
                            </button>
                            <button
                                onClick={handleNextClickTwo}
                                className={`custom-right-arrow bg-White rounded-md w-6 h-6 hover:bg-primaryColor hover:text-White`}
                                disabled={isEndTwo}
                            >
                                <RightOutlined />
                            </button>
                        </div>
                    </div>
                    <Carousel
                        ref={carouselRefTwo}
                        infinite={false}
                        autoPlay={false}
                        //   autoPlaySpeed={4000}
                        //   customTransition="all .5"
                        //   transitionDuration={500}
                        containerClass="carousel-container"
                        responsive={responsiveTwo}
                        beforeChange={handleBeforeChangeTwo}
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div
                            onClick={() => navigateTo("/products")}
                        >
                            <div className="bg-White rounded-md mx-3 group/textred cursor-pointer">
                                <div className="flex justify-center">
                                    <img src={CategoryImage1} alt="images" />
                                </div>
                                <h2 className="text-center uppercase border-t py-3 group-hover/textred:text-primaryColor">Beverages</h2>
                            </div>
                        </div>
                        <div className="bg-White rounded-md mx-3 group/textred cursor-pointer">
                            <div className="flex justify-center">
                                <img src={CategoryImage2} alt="images" />
                            </div>
                            <h2 className="text-center uppercase border-t py-3 group-hover/textred:text-primaryColor">Snacks</h2>
                        </div>
                        <div className="bg-White rounded-md mx-3 group/textred cursor-pointer">
                            <div className="flex justify-center">
                                <img src={CategoryImage3} alt="images" />
                            </div>
                            <h2 className="text-center uppercase border-t py-3 group-hover/textred:text-primaryColor">Frozen</h2>
                        </div>
                        <div className="bg-White rounded-md mx-3 group/textred cursor-pointer">
                            <div className="flex justify-center">
                                <img src={CategoryImage4} alt="images" />
                            </div>
                            <h2 className="text-center uppercase border-t py-3 group-hover/textred:text-primaryColor">Gum</h2>
                        </div>
                        <div className="bg-White rounded-md mx-3 group/textred cursor-pointer">
                            <div className="flex justify-center">
                                <img src={CategoryImage5} alt="images" />
                            </div>
                            <h2 className="text-center uppercase border-t py-3 group-hover/textred:text-primaryColor">Health & Beauty</h2>
                        </div>
                        <div className="bg-White rounded-md mx-3 group/textred cursor-pointer">
                            <div className="flex justify-center">
                                <img src={CategoryImage6} alt="images" />
                            </div>
                            <h2 className="text-center uppercase border-t py-3 group-hover/textred:text-primaryColor">Disposables</h2>
                        </div>
                    </Carousel>
                </section>
                <div className="">
                    <img src={SpecialImage} alt="images" />
                </div>
                <section className="my-10 inline-block w-full">
                    <CategoryProduct />
                </section>
                <section className="inline-block mb-10">
                    <div className="beffect">
                        <img src={BannerImage3} alt="images" className="w-full h-full" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
