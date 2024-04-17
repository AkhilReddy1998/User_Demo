import React from "react";
import { Radio, Input } from "antd";
import DeliveryImage from "../../../../Assets/Images/Icons/delivery.jpeg"
const { TextArea } = Input;

function Shipping() {
    return (
        <div className="px-7">
            <div className="bg-[#f5f5f5] p-5">
                <Radio checked className="w-full radioFull">
                    <div className="flex items-center justify-evenly gap-5 w-full">
                        <img src={DeliveryImage} alt="images" />
                        <p className="font-medium mb-0">My Carrier</p>
                        <p className="font-medium mb-0">Delivery next day!</p>
                        <p className="font-medium mb-0">$7.00 tax excl.</p>
                    </div>
                </Radio>
            </div>
            <p className="text-sm  mt-5"> If you would like to add a comment about your order, please write it in the field below.</p>
            <TextArea allowClear />
            <div className="flex justify-end mt-3">
                <button className=" bg-primaryColor text-White hover:bg-primaryText h-10 px-5 rounded-md">Continue</button>
            </div>
        </div>
    )
}

export default Shipping