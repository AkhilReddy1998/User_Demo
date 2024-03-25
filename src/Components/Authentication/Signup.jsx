import React, { useState } from "react";
import { Breadcrumb, Checkbox, DatePicker, Form, Input, Radio } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import Layouts from "../Layouts";

function Signup() {
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Layouts>
      <div className="bg-White p-2 border border-borderColor rounded-md">
        <Breadcrumb
          separator="|"
          className="commonBreadcrumb"
          items={[
            {
              title: (
                <div
                  onClick={() => navigateTo("/")}
                  className=" cursor-pointer hover:text-primaryColor"
                >
                  Home
                </div>
              ),
            },
            {
              title: "Create An Account",
            },
          ]}
        />
      </div>
      <div className="my-7">
        <h3 className="uppercase text-xl font-semibold border-b border-b-borderDark pb-3 mb-7">
          Create An Account
        </h3>
        <div className="w-[60%] mx-auto bg-White p-5 border border-borderColor rounded-md">
          <div className=" text-sm text-secondaryText mb-5">
            Already have an account?{" "}
            <span
              onClick={() => navigateTo("/login")}
              className="cursor-pointer hover:text-primaryColor text-primaryText"
            >
              Log in instead!
            </span>
          </div>

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
            <Form.Item className="mb-3" name="sat" label="Social Title">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Mr.</Radio>
                <Radio value={2}>Mrs.</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item className="mb-3" name="email" label="First Name">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="email" label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item className="mb-3" name="password" label="Password">
              <Input.Password />
            </Form.Item>
            <Form.Item className="mb-3" name="email" label="Date of Birth">
              <div className="flex gap-3 items-center">
                <DatePicker placeholder="MM/DD/YYYY" />
              </div>
            </Form.Item>
            <div className="mt-5">
              <Checkbox>Receive offers from our partners</Checkbox>
            </div>
            <div className="mt-3">
              <Checkbox>Customer data privacy</Checkbox>
              <span className="italic block">
                The personal data you provide is used to answer queries, process
                orders or allow access to specific information. You have the
                right to modify and delete all the personal information found in
                the "My Account" page.
              </span>
            </div>
            <div className="mt-3">
              <Checkbox>Sign up for our newsletter</Checkbox>
              <span className="italic block">
                You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
              </span>
            </div>
            <div className="mt-5">
              <Checkbox> I agree to the terms and conditions and the privacy policy</Checkbox>
            </div>
            <div className="flex justify-center ">
              <button className="primaryBtn text-sm font-medium w-[100px] mt-5">
                Sign Up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Layouts>
  );
}

export default Signup;
