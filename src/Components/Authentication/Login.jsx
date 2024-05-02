import React, { useState } from "react";
import { Breadcrumb, Form, Input, message } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import Header from "../Shared/Header";

function Login() {
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation()

  const handleLogin = async () => {
    try {
      const values = await form.validateFields();
      const { email, password } = values;

      const response = await fetch('http://localhost:7796/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });


      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.data.token;
        console.log(responseData, "response of data")
        localStorage.setItem("access_token", token);
        console.log("access_token", token);
        message.success(responseData.message);
        navigateTo("/");
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };


  return (
    <div>
      <Header />
      <main className="w-[95%] mx-auto">
        <div className="bg-White p-2 border border-borderColor rounded-md mt-5">
          <Breadcrumb
            separator="|"
            className="commonBreadcrumb"
            items={[
              {
                title: <div onClick={() => navigateTo("/")} className=" cursor-pointer hover:text-primaryColor">Home</div>,
              },
              {
                title: 'Log In To Your Account',
              },
            ]}
          />
        </div>
        <div className="my-7">
          <h3 className="uppercase text-xl font-semibold border-b border-b-borderDark pb-3 mb-7">LOG IN TO YOUR ACCOUNT</h3>
          <div className="w-[60%] mx-auto bg-White p-5 border border-borderColor rounded-md">
            <Form
              className="commonForm w-[80%] mx-auto"
              form={form}
              autoComplete="off"
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item className="mb-3" name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
              </Form.Item>
              <Form.Item className="mb-3" name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>
              <div onClick={() => navigateTo("/forgot-password")} className="cursor-pointer mt-5 text-center hover:text-primaryColor">Forgot your Password?</div>
              <div className="flex justify-center ">
                <button className="primaryBtn text-sm font-medium w-[100px] mt-5" onClick={handleLogin}>Sign In</button>
              </div>
            </Form>
            <div onClick={() => navigateTo("/signup")} className="border-t border-t-borderColor pt-4 mt-5 hover:text-primaryColor cursor-pointer text-center">No account? Create one here</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
