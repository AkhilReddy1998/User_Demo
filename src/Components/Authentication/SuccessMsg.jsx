import React from "react";
import SuccessImage from "../../Assets/Images/Auth/success.svg"
import useNavigation from "../../PageRouting/HandleNavigator";

function SuccessMsg() {
    const {navigateTo} = useNavigation()
    return (
        <div className="flex flex-col justify-between items-center gap-5">
            <div className="">
                <img src={SuccessImage} alt="images" />
            </div>
            <div className="text-center">
                <h4 className="text-2xl font-semibold">Password Changed Successfully</h4>
                <p className="text-sm">Your password has been updated successfully</p>
            </div>
            <button onClick={() => navigateTo("/")} className="primaryBtn w-full">Back to Login</button>
        </div>
    )
}

export default  SuccessMsg