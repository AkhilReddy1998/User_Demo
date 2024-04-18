import React from "react";
import Header from "../../Shared/Header";
import { Breadcrumb } from "antd";
import { DeleteFilled, EditFilled, RightOutlined } from "@ant-design/icons";
import useNavigation from "../../../PageRouting/HandleNavigator";

function MyAddress() {
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
                    title: <div className="cursor-pointer hover:text-primaryColor">Address</div>,
                },
            ]}
          />
        </div>
        <div className="flex justify-between items-center border-b border-b-borderDark my-10 pb-5">
          <h1 className="uppercase text-xl font-semibold mb-0">
            YOUR ADDRESSES
          </h1>
          <div className="cursor-pointer hover:text-primaryColor">
            + Add New Address
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-White rounded-md">
            <div className="p-5 border-b">
              <h3 className="text-lg font-semibold">My Address</h3>
              <p className="mb-1 text-sm">Gayu D</p>
              <p className="mb-1 text-sm">132, My Street,</p>
              <p className="mb-1 text-sm">kingston, New York 12401</p>
              <p className="mb-1 text-sm">United States</p>
            </div>
            <div className="flex justify-start gap-10 p-4">
              <div className="flex gap-2 text-secondaryText cursor-pointer hover:text-primaryColor">
                <EditFilled />
                Update
              </div>
              <div className="flex gap-2 text-secondaryText cursor-pointer hover:text-primaryColor">
                <DeleteFilled />
                Delete
              </div>
            </div>
          </div>
          <div className="bg-White rounded-md">
            <div className="p-5 border-b">
              <h3 className="text-lg font-semibold">My Address</h3>
              <p className="mb-1 text-sm">Gayu D</p>
              <p className="mb-1 text-sm">132, My Street,</p>
              <p className="mb-1 text-sm">kingston, New York 12401</p>
              <p className="mb-1 text-sm">United States</p>
            </div>
            <div className="flex justify-start gap-10 p-4">
              <div className="flex gap-2 text-secondaryText cursor-pointer hover:text-primaryColor">
                <EditFilled />
                Update
              </div>
              <div className="flex gap-2 text-secondaryText cursor-pointer hover:text-primaryColor">
                <DeleteFilled />
                Delete
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyAddress;
