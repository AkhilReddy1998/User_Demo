import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Checkbox, Form, Input, Radio, Select } from "antd";
import React from "react";

function Address() {
    const [form] = Form.useForm();

    return (
        <div className="px-7">
            <p className="text-secondaryText text-sm">The selected address will be used both as your personal address (for invoice) and as your delivery address.</p>
            <Form
                className="commonForm secondForm"
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
                <Form.Item className="mb-3 text-left" name="email" label="First Name">
                    <Input className="w-[70%]" />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Last Name">
                    <Input className="w-[70%]" />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Company">
                    <Input className="w-[70%]" />
                    <span className="ml-10 text-secondaryText">Optional</span>
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Address">
                    <Input className="w-[70%]" />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Address Complement">
                    <Input className="w-[70%]" />
                    <span className="ml-10 text-secondaryText">Optional</span>
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="City">
                    <Input className="w-[70%]" />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="State">
                    <Select
                        placeholder="--Please Choose--"
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Zip/Postal Code">
                    <Input className="w-[70%]" />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Country">
                    <Select
                        placeholder="--Please Choose--"
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item className="mb-3 text-left" name="email" label="Phone">
                    <Input className="w-[70%]" />
                    <span className="ml-10 text-secondaryText">Optional</span>
                </Form.Item>
                <div className="mt-5">
                    <Checkbox>Use this address for invoice too</Checkbox>
                </div>
                <div className="flex justify-end mt-5">
                    <button className=" bg-primaryColor text-White hover:bg-primaryText h-10 px-5 rounded-md">Continue</button>
                </div>
            </Form>
            <div className="">
                <div className="grid grid-cols-2 gap-5">
                    <div className="border rounded-md">
                        <div className="p-5 border-b">
                            <Radio checked className="items-base secondRadio">
                                <h3 className="text-lg font-bold">My Address</h3>
                                <p className="mb-1">Gayu D</p>
                                <p className="mb-1">132, My Street,</p>
                                <p className="mb-1">kingston, New York 12401</p>
                                <p className="mb-1">United States</p>
                            </Radio>
                        </div>
                        <div className="flex justify-center gap-10 py-4">
                            <div className="flex gap-2 text-secondaryText cursor-pointer hover:text-primaryColor">
                                <EditFilled />
                                Edit
                            </div>
                            <div className="flex gap-2 text-secondaryText cursor-pointer hover:text-primaryColor">
                                <DeleteFilled />
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 cursor-pointer hover:text-primaryColor">+ Add New Address</div>
                <p className="mt-3">Billing address differs from shipping address</p>
                <div className="flex justify-end mt-3">
                    <button className=" bg-primaryColor text-White hover:bg-primaryText h-10 px-5 rounded-md">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Address