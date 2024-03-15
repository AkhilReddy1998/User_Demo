import React from "react";
import SignupImage from "../../Assets/Images/Auth/Signup.png";
import { Checkbox, Form, Input } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";

function Signup() {
  const [form] = Form.useForm();
  const {navigateTo} = useNavigation()
  return (
    <div className="flex min-h-screen">
      <div className="w-[60%] h-screen">
        <img
          src={SignupImage}
          alt="images"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-[40%] min-h-screen p-14">
        <div className="flex flex-col justify-center h-full">
          <div className="mb-3">
            <h3 className="text-3xl font-semibold mb-2">Create New Account</h3>
            <p className="text-secondaryText text-base">Please enter details</p>
          </div>
          <Form
            className="commonForm"
            form={form}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item className="mb-3" name="firstname" label="First Name">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="lastname" label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="email" label="Email Address">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="password" label="Password">
              <Input.Password />
            </Form.Item>
            <div className="">
              <Checkbox checked>I agree to the <span className="font-semibold">Terms & Conditions</span></Checkbox>
            </div>
            <button className="primaryBtn w-full mt-10">Signup</button>
          </Form>
          <div className="flex gap-2 text-secondaryText text-base mt-8">
            Already have an account?{" "}
            <div onClick={() => navigateTo("/")} className="text-primaryColor font-semibold hover:underline cursor-pointer">
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
