import { SearchOutlined } from "@ant-design/icons";
import { Badge, Input } from "antd";
import React from "react";
import NotificationsIcon from "../../Assets/Images/Svg/Notification.svg";
import UserProfile from "../../Assets/Images/DummyImg.png"

function Header() {
  return (
    <div className="flex justify-between items-center h-20">
      <div className="searchBox">
        <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
      </div>
      <div className="flex items-center">
        <Badge count={5}>
          <img src={NotificationsIcon} alt="Notification" />
        </Badge>
        <div className="rounded-full border border-brand-secondaryColor w-12 h-12 ml-8">
          <img src={UserProfile} alt="profile" className="rounded-full " />
        </div>
      </div>
    </div>
  );
}

export default Header;
