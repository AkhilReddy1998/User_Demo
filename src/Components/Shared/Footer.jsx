import { PhoneOutlined } from "@ant-design/icons";
import React from "react";

function Footer() {
    return(
        <Footer className="bg-White">
            <div className="w-[90%] mx-auto py-">
                <div className="grid grid-cols-4">
                    <div>
                        <h4>STORE INFORMATION</h4>
                        <ul>
                            <li>
                            <PhoneOutlined />
                            <a href="tel:123456789">123456789</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default Footer