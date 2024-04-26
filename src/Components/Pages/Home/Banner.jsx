import React from "react";
import Carousel from "react-multi-carousel";
import TopBanner1 from "../../../Assets/Images/Banner/Banner1.png";
import TopBanner2 from "../../../Assets/Images/Banner/Banner2.png";
import TopBanner3 from "../../../Assets/Images/Banner/Banner3.png";
import TopBanner4 from "../../../Assets/Images/Banner/Banner4.png";
import Banner1 from "../../../Assets/Images/Banner/slider-1.png";
import Banner2 from "../../../Assets/Images/Banner/slider-2.png";

function HomeBanner() {

    const responsive = {
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
    return (
        <>
            {/* <div className="w-[20%] bg-White rounded-md h-full">
            </div> */}
              <div className="w-[20%] flex flex-col gap-6">
                <div className="beffect">
                    <img src={TopBanner1} alt="images" className="w-full h-full rounded-md cursor-pointer" />
                </div>
                <div className="beffect">
                    <img src={TopBanner2} alt="images" className="w-full h-full rounded-md cursor-pointer" />
                </div>
            </div>
            <div className="w-[60%]">
                <Carousel
                    infinite={true}
                    autoPlay={true}
                    showDots={true}
                    autoPlaySpeed={2000}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    responsive={responsive}
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>
                        <div className="rounded-md">
                            <img src={Banner1} alt="images" className="rounded-md" />
                        </div>
                        <div className="absolute top-[25%] w-[50%] mx-10 overflow-hidden slidecap">
                            {/* <h4 className="text-White uppercase mb-5">spring - summer 2020</h4>
                            <h2 className="text-White text-6xl font-bold">New Arrivals</h2> */}
                            {/* <p className="text-White text-sm">Stock up on sportswear and limited edition collections on our awesome mid-season sale.</p> */}
                            {/* <button className="mt-7 uppercase bg-primaryColor hover:bg-[#000] h-12 px-5 rounded-md text-White text-sm font-medium cursor-pointer ">Shop now</button> */}
                        </div>
                    </div>
                    <div>
                        <div className="rounded-md">
                            <img src={Banner2} alt="images" className="rounded-md" />
                        </div>
                        <div className="absolute top-[25%] w-[50%] mx-10 overflow-hidden slidecap">
                            {/* <h4 className="text-White uppercase mb-5">spring - summer 2020</h4>
                            <h2 className="text-White text-6xl font-bold">New Arrivals</h2>
                            <p className="text-White text-sm">Stock up on sportswear and limited edition collections on our awesome mid-season sale.</p>
                            <button className="mt-7 uppercase bg-primaryColor hover:bg-[#000] h-12 px-5 rounded-md text-White text-sm font-medium cursor-pointer ">Shop now</button> */}
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="w-[20%] flex flex-col gap-6">
                <div className="beffect">
                    <img src={TopBanner3} alt="images" className="w-full h-full rounded-md cursor-pointer" />
                </div>
                <div className="beffect">
                    <img src={TopBanner4} alt="images" className="w-full h-full rounded-md cursor-pointer" />
                </div>
            </div></>
    )
}

export default HomeBanner