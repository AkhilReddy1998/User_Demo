import React from "react";
import LoginImage from "../../Assets/Images/Auth/Login.png";
import { Checkbox, Form, Input } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";

function Login() {
  const [form] = Form.useForm();
  const {navigateTo} = useNavigation()
  return (
    <div className="flex min-h-screen">
      <div className="w-[60%] h-screen">
        <img
          src={LoginImage}
          alt="images"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-[40%] min-h-screen p-14">
        <div className="flex flex-col justify-center h-full">
          <div className="mb-3">
            <h3 className="text-3xl font-semibold mb-2">Welcome 👋</h3>
            <p className="text-secondaryText text-base">Please login here</p>
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
            <Form.Item className="mb-3" name="password" label="Password">
              <Input.Password />
            </Form.Item>
            <div className="flex justify-between items-center">
              <Checkbox checked>Remember Me</Checkbox>
              <div onClick={() => navigateTo("/forgot-password")} className="cursor-pointer font-light">Forgot Password?</div>
            </div>
            <button className="primaryBtn w-full mt-10">Login</button>
          </Form>
          <div className="flex gap-2 text-secondaryText text-base mt-8">
            Don't have an account?{" "}
            <div onClick={() => navigateTo("/signup")} className="text-primaryColor font-semibold hover:underline cursor-pointer">
              SignUp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
