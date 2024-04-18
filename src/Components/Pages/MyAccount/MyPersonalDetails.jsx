import React, { useState } from "react";
import Header from "../../Shared/Header";
import { Breadcrumb, Checkbox, DatePicker, Form, Input, Radio } from "antd";
import { RightOutlined } from "@ant-design/icons";
import useNavigation from "../../../PageRouting/HandleNavigator";

function MyPersonalDetails() {
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
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
                                title: <div className="cursor-pointer hover:text-primaryColor">Your Personal Information</div>,
                            },
                        ]}
                    />
                </div>
                <h1 className="uppercase text-xl font-semibold border-b border-b-borderDark my-10 pb-5">
                    YOUR PERSONAL INFORMATION
                </h1>
                <div className="w-full mx-auto bg-White p-5 border border-borderColor rounded-md">

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
                            <Input className="w-[70%]" />
                        </Form.Item>
                        <Form.Item className="mb-3" name="email" label="Last Name">
                            <Input className="w-[70%]" />
                        </Form.Item>
                        <Form.Item className="mb-3" name="email" label="Email">
                            <Input className="w-[70%]" />
                        </Form.Item>
                        <Form.Item className="mb-3" name="password" label="Password">
                            <Input.Password className="w-[70%]" />
                        </Form.Item>
                        <Form.Item className="mb-3" name="password" label="New Password">
                            <Input.Password className="w-[70%]" />
                            <span className="ml-10 text-secondaryText">Optional</span>

                        </Form.Item>
                        <Form.Item className="mb-3" name="email" label="Date of Birth">
                            <DatePicker placeholder="MM/DD/YYYY" className="secondDate" />
                            <span className="ml-10 text-secondaryText">Optional</span>
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
                                Save
                            </button>
                        </div>
                    </Form>
                </div>
            </main>
        </div>
    );
}

export default MyPersonalDetails;
