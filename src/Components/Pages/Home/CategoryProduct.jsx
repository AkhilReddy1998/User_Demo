import React, { useState, useRef } from "react";
import {
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";
import Carousel from "react-multi-carousel";
import prod1 from "../../../Assets/Images/Icons/chair.png";
import prod2 from "../../../Assets/Images/Icons/phone.png";
import prod3 from "../../../Assets/Images/Icons/shirt.png";
import prod4 from "../../../Assets/Images/Icons/heals.png";
import { Rate } from "antd";
import ProductImage1 from "../../../Assets/Images/Products/Camera.jpeg";
import ProductImage2 from "../../../Assets/Images/Products/phone.jpeg";
import ProductImage3 from "../../../Assets/Images/Products/headphone.jpeg";
import ProductImage4 from "../../../Assets/Images/Products/speaker.jpeg";
import ProductImage5 from "../../../Assets/Images/Products/tv.jpeg";
import ProductImage6 from "../../../Assets/Images/Products/1.png";

function CategoryProduct() {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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

    const responsiveTwo = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
        <>
            <div className="flex justify-between items-center border-b border-b-borderDark pb-2 mb-10">
                <h3 className="uppercase text-xl font-semibold">CATEGORIES PRODUCTS</h3>
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
            <div className="flex gap-6">
                <div className="w-[20%]">

                    <Carousel
                        ref={carouselRefTwo}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        responsive={responsiveTwo}
                        beforeChange={handleBeforeChangeTwo}
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="bg-White rounded-md px-3 h-full">
                            <div className="flex gap-3 items-center border-b py-3 group/textred cursor-pointer">
                                <div className="border-r px-3">
                                    <img src={prod1} alt="images" />
                                </div>
                                <h5 className="mb-0 group-hover/textred:text-primaryColor capitalize">Accessories</h5>
                            </div>
                            <div className="flex gap-3 items-center border-b py-3 group/textred cursor-pointer">
                                <div className="border-r px-3">
                                    <img src={prod2} alt="images" />
                                </div>
                                <h5 className="mb-0 group-hover/textred:text-primaryColor capitalize">Integer sit amet</h5>
                            </div>
                            <div className="flex gap-3 items-center border-b py-3 group/textred cursor-pointer">
                                <div className="border-r px-3">
                                    <img src={prod1} alt="images" />
                                </div>
                                <h5 className="mb-0 group-hover/textred:text-primaryColor capitalize">Nunc commodo</h5>
                            </div>
                            <div className="flex gap-3 items-center border-b py-3 group/textred cursor-pointer">
                                <div className="border-r px-3">
                                    <img src={prod3} alt="images" />
                                </div>
                                <h5 className="mb-0 group-hover/textred:text-primaryColor capitalize">ligula purus</h5>
                            </div>
                            <div className="flex gap-3 items-center border-b py-3 group/textred cursor-pointer">
                                <div className="border-r px-3">
                                    <img src={prod4} alt="images" />
                                </div>
                                <h5 className="mb-0 group-hover/textred:text-primaryColor capitalize">molestie suscipit</h5>
                            </div>
                        </div>
                        <div className="bg-White rounded-md px-3 h-full">
                            <div className="flex gap-3 items-center border-b py-3 group/textred cursor-pointer">
                                <div className="border-r px-3">
                                    <img src={prod1} alt="images" />
                                </div>
                                <h5 className="mb-0 group-hover/textred:text-primaryColor capitalize">Exercise Fitness</h5>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="w-[80%]">
                    <Carousel
                        ref={carouselRef}
                        infinite={false}
                        autoPlay={false}
                        // autoPlaySpeed={4000}
                        // customTransition="all .5"
                        // transitionDuration={500}
                        containerClass="carousel-container"
                        responsive={responsive}
                        beforeChange={handleBeforeChange}
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="flex flex-col gap-6 mx-3">
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage3} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        FUJIFILM Instax Mini 9 Instant Camera
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage4} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        Apple iPhone 15 (White, 64 GB)
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mx-3">
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage1} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        FUJIFILM Instax Mini 9 Instant Camera
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage2} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        Apple iPhone 15 (White, 64 GB)
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mx-3">
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage5} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        FUJIFILM Instax Mini 9 Instant Camera
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage6} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        Apple iPhone 15 (White, 64 GB)
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 mx-3">
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage3} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        FUJIFILM Instax Mini 9 Instant Camera
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-White p-3 rounded-md flex items-center">
                                <div className="w-[100px]">
                                    <img src={ProductImage4} alt="images" className="w-full h-full" />
                                </div>
                                <div>
                                    <Rate className="commonRate mb-3" allowHalf defaultValue={4.5} />
                                    <div className="font-regular">
                                        Apple iPhone 15 (White, 64 GB)
                                    </div>
                                    <div className="flex gap-3 items-center mt-2">
                                        <h6 className="font-semibold text-base mb-0">$99.50</h6>
                                        <p className="text-secondaryText text-xs  mb-0">
                                            <span className="line-through text-sm">$118.00</span>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default CategoryProduct