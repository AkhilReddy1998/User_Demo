import React from "react";
import ForgotImage from "../../Assets/Images/Auth/forgot.png";
import { Breadcrumb, Form, Input } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import { LeftOutlined } from "@ant-design/icons";
import Layouts from "../Layouts";

function ForgotPassword() {
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation();
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
              title: 'Reset Your Password',
            },
          ]}
        />
      </div>
      <div className="my-7">
        <h3 className="uppercase text-xl font-semibold border-b border-b-borderDark pb-3 mb-7">FORGOT YOUR PASSWORD?</h3>
        <div className="bg-White p-5 border border-borderColor rounded-md">
          <Form
            className="commonForm w-[60%] mx-auto"
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
            <p className="text-secondaryText text-center mb-5">Please enter the email address you used to register. You will receive a temporary link to reset your password.</p>
            <Form.Item className="my-10" name="email" label="Email Address">
              <div className="flex items-center gap-3">
              <Input />
              <button className="primaryBtn hover:bg-primaryText text-sm font-medium w-[200px] ">Send Reset Link</button>
              </div>
            </Form.Item>
          </Form>

        </div>
      </div>
    </Layouts>
  );
}

export default ForgotPassword;
