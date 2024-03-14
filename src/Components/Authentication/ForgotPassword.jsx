import React from "react";
import ForgotImage from "../../Assets/Images/Auth/forgot.png";
import { Form, Input } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import { LeftOutlined } from "@ant-design/icons";

function ForgotPassword() {
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation();
  return (
    <div className="flex min-h-screen">
      <div className="w-[60%] h-screen">
        <img
          src={ForgotImage}
          alt="images"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-[40%] min-h-screen p-14">
        <div className="flex flex-col justify-center h-full">
          <div onClick={() => navigateTo("/")} className="flex gap-2 mb-8 cursor-pointer">
            <LeftOutlined className="text-sm"/>
            <div className="font-regular text-sm">Back</div>
          </div>
          <div className="mb-3">
            <h3 className="text-3xl font-semibold mb-2">Forgot Password</h3>
            <p className="text-secondaryText text-base">
              Enter your registered email address. we’ll send you a code to
              reset your password.
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
            <button onClick={() => navigateTo("/otp")} className="primaryBtn w-full mt-5">Sent OTP</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
