import React from "react";
import Header from "../../../Shared/Header";
import { Breadcrumb } from "antd";
import { CheckCircleOutlined, RightOutlined } from "@ant-design/icons";

function OrderConfirmation() {
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
                <div className="bg-White mt-5 p-4">
                    <div className="flex items-center gap-3">
                        <CheckCircleOutlined className="text-3xl text-Green"/>
                        <h3 className="mb-0 text-xl font-medium">YOUR ORDER IS CONFIRMED</h3>
                    </div>
                    <p className="text-secondaryText mt-4 text-sm">An email has been sent to your mail address gayuprabavathi@gmail.com.</p>
                </div>
                <div className="bg-White mt-5 p-4">
                    <h2 className="uppercase font-semibold mb-0">ORDER ITEMS</h2>
                </div>
            </main>
        </div>
    )
}

export default OrderConfirmation