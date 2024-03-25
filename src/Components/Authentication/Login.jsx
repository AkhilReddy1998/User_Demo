import React from "react";
import { Breadcrumb, Checkbox, Form, Input } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import Layouts from "../Layouts";

function Login() {
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation()
  return (
    <Layouts>
      <div className="bg-White p-2 border border-borderColor rounded-md">
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
            <Form.Item className="mb-3" name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="password" label="Password">
              <Input.Password />
            </Form.Item>
            <div onClick={() => navigateTo("/forgot-password")} className="cursor-pointer mt-5 text-center hover:text-primaryColor">Forgot your Password?</div>
            <div className="flex justify-center ">
              <button className="primaryBtn text-sm font-medium w-[100px] mt-5">Sign In</button>
            </div>
          </Form>
          <div onClick={() => navigateTo("/signup")} className="border-t border-t-borderColor pt-4 mt-5 hover:text-primaryColor cursor-pointer text-center">No account? Create one here</div>
        </div>
      </div>
    </Layouts>
  );
}

export default Login;
