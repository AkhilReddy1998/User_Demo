import React from "react";
import Product1 from "../../../Assets/Images/Products/1.png";
import { CloseOutlined } from "@ant-design/icons";
import useNavigation from "../../../PageRouting/HandleNavigator";


const CartDropdown = () => {
    const { navigateTo } = useNavigation();
    return (
        <div className="bg-White w-[300px] commonBoxshadow rounded-md p-3">
            <div className="border-b">
                <div className="flex gap-3 items-center mb-6">
                    <div className="w-[20%]">
                        <img src={Product1} alt="images" />
                    </div>
                    <div className="w-[80%]">
                        <div className="flex gap-3 items-center">
                            <h3 className="truncate mb-1">Apple iPhone 12 (Blue, 64 GB)</h3>
                            <div className="hover:text-primaryColor cursor-pointer">
                                <CloseOutlined />
                            </div>
                        </div>
                        <div className="">1 x $230.00</div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <table className="normalTable">
                    <tbody>
                        <tr>
                            <td>Total Products:</td>
                            <td>$530.00</td>
                        </tr>
                        <tr>
                            <td>Total Shipping:</td>
                            <td>$7.00</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>$537.00 (tax excl.)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => navigateTo("/cart")} className="bg-primaryColor text-White w-full mt-3 rounded-md h-10">Checkout</button>
        </div>
    )
}

export default CartDropdown