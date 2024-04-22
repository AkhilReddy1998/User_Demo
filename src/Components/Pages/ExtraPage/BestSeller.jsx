import React, { useState } from "react";
import { Breadcrumb, Segmented, Select, Rate } from "antd";
import { RightOutlined, CaretDownFilled, BarsOutlined, AppstoreAddOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import useNavigation from "../../../PageRouting/HandleNavigator";
import Header from "../../Shared/Header";
import ProductImage1 from "../../../Assets/Images/Products/1.png";

function BestSeller() {
    const { navigateTo } = useNavigation();
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
                                title: <div className="cursor-pointer hover:text-primaryColor">Best Sellers</div>,
                            },
                        ]}
                    />
                </div>
                <h1 className="uppercase text-xl font-semibold my-5">
                    Best Sellers
                </h1>
                <div className="bg-White p-3 rounded-md">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-">
                            15 items
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="flex items-center gap-3">
                                <span className="text-sm">Sort by:</span>
                                <Select
                                    className="commonSelect2"
                                    defaultValue="a"
                                    options={FilterItems}
                                    suffixIcon={<CaretDownFilled />}
                                />
                            </div>
                            <Segmented
                                className="commonSegment"
                                options={[
                                    {
                                        value: "List",
                                        icon: <BarsOutlined />,
                                    },
                                    {
                                        value: "Kanban",
                                        icon: <AppstoreAddOutlined />,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-5">
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="bg-White rounded-md border-[0.5px] border-borderColor "
                    >
                        <div className="relative flex justify-center border-b-borderColor border-b p-3">
                            <div onClick={() => navigateTo("/product-details")} className="cursor-pointer">
                                <img src={ProductImage1} alt="images" className="w-[180px]" />
                            </div>
                            <div className="absolute right-5 cursor-pointer bg-White z-7">
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
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BestSeller