import React from "react";
import Header from "../../../Shared/Header";
import { Breadcrumb, Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Security from "../../../../Assets/Images/Icons/security.svg";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import Shipping from "./Shipping";
import Payment from "./Payment";


function CartCheckout() {
    const items = [
        {
            key: '1',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="mr-5">1</span>
                    <span>PERSONAL INFORMATION</span>
                </div>
            ),
            children: <PersonalInformation />,
            showArrow: false
        },
        {
            key: '2',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="mr-5">2</span>
                    <span>ADDRESSES</span>
                </div>
            ),
            children: <Address />,
            showArrow: false
        },
        {
            key: '3',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="mr-5">3</span>
                    <span>SHIPPING METHOD</span>
                </div>
            ),
            children: <Shipping />,
            showArrow: false,
        },
        {
            key: '4',
            label: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="mr-5">4</span>
                    <span>PAYMENT</span>
                </div>
            ),
            children: <Payment />,
            showArrow: false,

        },
    ];
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
                        ]}
                    />
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-[70%]">
                        <Collapse className="commonCollapse secondCollapse" accordion bordered={false} items={items} defaultActiveKey={['1']} />
                    </div>
                    <div className="w-[30%] ">
                        <div className="bg-White rounded-md h-fit inline-block w-full">
                            <div className="text-sm p-4 text-secondaryText">2 items</div>
                            <div className="text-sm px-4">Show Details</div>
                            <div className="flex justify-between items-center border-b p-4">
                                <div className="text-sm">
                                    <div className="">Subtotal</div>
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

export default CartCheckout;