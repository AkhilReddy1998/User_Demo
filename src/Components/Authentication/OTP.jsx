import React from "react";
import OTPImage from "../../Assets/Images/Auth/otp.png";
import { Form, Input } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import { LeftOutlined } from "@ant-design/icons";

function OTP() {
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation();
  return (
    <div className="flex min-h-screen">
      <div className="w-[60%] h-screen">
        <img
          src={OTPImage}
          alt="images"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-[40%] min-h-screen p-14">
        <div className="flex flex-col justify-center h-full">
          <div onClick={() => navigateTo("/forgot-password")} className="flex gap-2 mb-8 cursor-pointer">
            <LeftOutlined className="text-sm"/>
            <div className="font-regular text-sm">Back</div>
          </div>
          <div className="mb-3">
            <h3 className="text-3xl font-semibold mb-2">Enter OTP</h3>
            <p className="text-secondaryText text-base">
            We have share a code of your registered email address
robertfox@example.com
            </p>
          </div>
          <Form
            className="commonForm"
            form={form}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item className="mb-3" name="email" label="Email Address">
              <Input />
            </Form.Item>
            <button className="primaryBtn w-full mt-5">Verify</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OTP;
