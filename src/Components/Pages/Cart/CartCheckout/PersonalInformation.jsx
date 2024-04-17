import React from "react";

function PersonalInformation() {
    return(
        <div className="pl-7">
            <p className="text-secondaryText text-sm">Connected as <span className="hover:text-primaryColor cursor-pointer text-primaryText">Gayu D.</span></p>
            <p className="text-secondaryText text-sm">Not you? <span className="hover:text-primaryColor cursor-pointer text-primaryText">Log out</span></p>
            <p className="text-secondaryText text-xs">If you sign out now, your cart will be emptied.</p>
        </div>
    )
}

export default PersonalInformation