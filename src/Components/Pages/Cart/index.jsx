import React from "react";
import Header from "../../Shared/Header";
import { Breadcrumb, InputNumber } from "antd";
import { DeleteFilled, LeftOutlined, RightOutlined } from "@ant-design/icons";
import Product1 from "../../../Assets/Images/Products/1.png";
import Security from "../../../Assets/Images/Icons/security.svg";
import useNavigation from "../../../PageRouting/HandleNavigator";

function Cart() {
    const {navigateTo} = useNavigation();
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
                                title: "Home",
                            },
                            {
                                title: "Cart",
                            },
                        ]}
                    />
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-[70%] ">
                        <div className="bg-White rounded-md">
                            <div className=" border-b">
                                <h2 className="uppercase font-semibold p-5 mb-0">SHOPPING CART</h2>
                            </div>
                            <div className="inline-block w-full">
                                <div className="flex justify-between gap-5 my-6 px-5">
                                    <div className="w-[20%] items-center justify-center flex">
                                        <div className="w-[100px]">
                                            <img src={Product1} alt="images" />
                                        </div>
                                    </div>
                                    <div className="w-[80%] flex justify-between gap-5">
                                        <div className="w-full">
                                            <h3 className=" mb-1">Apple iPhone 12 (Blue, 64 GB)</h3>
                                            <h2 className="font-bold text-lg">$230.00</h2>
                                            <p className="text-sm">Dimension: 40x60cm</p>
                                        </div>
                                        <div className="flex justify-between items-center gap-5 h-fit w-full">
                                            <InputNumber
                                                min={1}
                                                max={10}
                                                defaultValue={3}
                                                controls={true}
                                                className="h-10 always-show-controls flex items-center"
                                            />
                                            <h2 className="font-bold text-lg mb-0">$230.00</h2>
                                            <DeleteFilled className="hover:text-primaryColor cursor-pointer text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-5 my-6 px-5">
                                    <div className="w-[20%] items-center justify-center flex">
                                        <div className="w-[100px]">
                                            <img src={Product1} alt="images" />
                                        </div>
                                    </div>
                                    <div className="w-[80%] flex justify-between gap-5">
                                        <div className="w-full">
                                            <h3 className=" mb-1">Apple iPhone 12 (Blue, 64 GB)</h3>
                                            <h2 className="font-bold text-lg">$230.00</h2>
                                            <p className="text-sm">Dimension: 40x60cm</p>
                                        </div>
                                        <div className="flex justify-between items-center gap-5 h-fit w-full">
                                            <InputNumber
                                                min={1}
                                                max={10}
                                                defaultValue={3}
                                                controls={true}
                                                className="h-10 always-show-controls flex items-center"
                                            />
                                            <h2 className="font-bold text-lg mb-0">$230.00</h2>
                                            <DeleteFilled className="hover:text-primaryColor cursor-pointer text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="flex gap-3 text-sm hover:text-primaryColor cursor-pointer mt-5">
                            <LeftOutlined />
                            Continue to shopping
                        </p>
                    </div>
                    <div className="w-[30%] ">
                        <div className="bg-White rounded-md h-fit inline-block w-full">
                            <div className="flex justify-between items-center border-b p-4">
                                <div className="text-sm">
                                    <div className="">1 items</div>
                                    <div className="">Shipping</div>
                                </div>
                                <div className="text-sm text-right">
                                    <div className="">$230.00</div>
                                    <div className="">$7.00</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b p-4">
                                <div className="text-sm">
                                    <div className="">Total (tax excl.)</div>
                                    <div className="">Taxes</div>
                                </div>
                                <div className="text-sm text-right">
                                    <div className="">$237.00</div>
                                    <div className="">$0.00</div>
                                </div>
                            </div>
                            <div className="flex justify-center my-5">
                                <button onClick={() => navigateTo("/cart-checkout")} className="bg-primaryColor hover:bg-primaryText text-White px-5 rounded-md h-10">Proceed to Checkout</button>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-5">
                            <img src={Security} alt="images" />
                            <p className="mb-0 text-sm">Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart