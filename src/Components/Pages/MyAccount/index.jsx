import React from "react";
import Header from "../../Shared/Header";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import useNavigation from "../../../PageRouting/HandleNavigator";

function MyAccount() {
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
                        ]}
                    />
                </div>
                <h1 className="uppercase text-xl font-semibold border-b border-b-borderDark pb-3 mb-7 mt-8 border-b">Your Account</h1>
                <div className="mt-7 grid grid-cols-3 gap-5">
                    <div onClick={() => navigateTo("/personal-details")} className="bg-White p-5 rounded-md flex flex-col justify-center items-center cursor-pointer">
                        <h4 className="uppercase mb-0">Information</h4>
                    </div>
                    <div onClick={() => navigateTo("/myaddress")} className="bg-White p-5 rounded-md flex flex-col justify-center items-center cursor-pointer">
                        <h4 className="uppercase mb-0">Addresses</h4>
                    </div>
                    <div onClick={() => navigateTo("/order-history")} className="bg-White p-5 rounded-md flex flex-col justify-center items-center cursor-pointer">
                        <h4 className="uppercase mb-0">Order history and details</h4>
                    </div>
                    <div className="bg-White p-5 rounded-md flex flex-col justify-center items-center cursor-pointer">
                        <h4 className="uppercase mb-0">credit slips</h4>
                    </div>
                    <div className="bg-White p-5 rounded-md flex flex-col justify-center items-center cursor-pointer">
                        <h4 className="uppercase mb-0">gdpr - personal data</h4>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="bg-primaryColor hover:bg-primaryText px-5 text-White h-10 rounded-md">Sign Out</button>
                </div>
            </main>
        </div>
    )
}

export default MyAccount