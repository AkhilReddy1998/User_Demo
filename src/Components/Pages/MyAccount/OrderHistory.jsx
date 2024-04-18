import React from "react";
import Header from "../../Shared/Header";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import useNavigation from "../../../PageRouting/HandleNavigator";

function OrderHistory() {
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
                                title:  <div className="cursor-pointer hover:text-primaryColor" onClick={() => navigateTo("/")}>Home</div>,
                            },
                            {
                                title: <div className="cursor-pointer hover:text-primaryColor" onClick={() => navigateTo("myaccount")}>Your Account</div>,
                            },
                            {
                                title: <div className="cursor-pointer hover:text-primaryColor">Order History</div>,
                            },
                        ]}
                    />
                </div>
                <h1 className="uppercase text-xl font-semibold border-b border-b-borderDark my-10 pb-5">
                ORDER HISTORY
                </h1>
            </main>
        </div>
    )
}

export default OrderHistory