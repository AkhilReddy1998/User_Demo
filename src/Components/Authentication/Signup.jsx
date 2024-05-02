import React, { useState } from "react";
import { Breadcrumb, Checkbox, DatePicker, Form, Input, Radio, message } from "antd";
import useNavigation from "../../PageRouting/HandleNavigator";
import Header from "../Shared/Header";
import axios from "axios";
import { base_url } from "../BaseUrl/Url";

function Signup() {
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();
  const { navigateTo } = useNavigation();
  const [checked, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false
  });

  const [addRecord, setAddRecord] = useState({
    radio: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dateofbirth: "",
  })

  const [submitLoading, setSubmitLoading] = useState(false)

  const hanlde_Submit = () => {
    setSubmitLoading(true)
    async function Submit() {
      try {
        await axios.post(`${base_url}/user/register`, {
          "name": addRecord.firstname,
          "lastname": addRecord.lastname,
          "email": addRecord.email,
          "password": addRecord.password,
          "dob": addRecord.dateofbirth
        }).then((res) => {
          console.log(res,"???,res")
          if (res.data.success === true) {
            handle_clear()
            setSubmitLoading(false)
            message.success(res.data.message)
          }
          else if (res.data.success === false) {
            setSubmitLoading(false)
            message.error(res.data.message)
          }
        })
      } catch (err) {
        setSubmitLoading(false)
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log('Error', err.response);
        } else if (err.request) {
          console.log('Error', err.request);
          // The client never received a response, and the request was never left
        } else {
          // Anything else
          console.log('Error', err.message);
        }
      }
    }
    Submit()
  }

  const handle_clear = () => {
    form.resetFields()
    setAddRecord({
      radio: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      dateofbirth: "",
    })
    setChecked({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false
    })
  }


  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setAddRecord({ ...addRecord, radio: e.target.value })
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
              <Form.Item className="mb-3" name="firstname" label="First Name">
                <Input onChange={(e) => setAddRecord({ ...addRecord, firstname: e.target.value })} />
              </Form.Item>
              <Form.Item className="mb-3" name="lastname" label="Last Name">
                <Input onChange={(e) => setAddRecord({ ...addRecord, lastname: e.target.value })} />
              </Form.Item>
              <Form.Item className="mb-3" name="email" label="Email">
                <Input onChange={(e) => setAddRecord({ ...addRecord, email: e.target.value })} />
              </Form.Item>
              <Form.Item className="mb-3" name="password" label="Password">
                <Input.Password onChange={(e) => setAddRecord({ ...addRecord, password: e.target.value })} />
              </Form.Item>
              <Form.Item className="mb-3" name="dateofbirth" label="Date of Birth">
                <div className="flex gap-3 items-center">
                  <DatePicker placeholder="MM/DD/YYYY" onChange={(date, dateString) => setAddRecord({ ...addRecord, dateofbirth: dateString })} />
                </div>
              </Form.Item>
              <div className="mt-5">
                <Checkbox checked={checked.checked1} onChange={(e) => setChecked({ ...checked, checked1: e.target.checked })}>Receive offers from our partners</Checkbox>
              </div>
              <div className="mt-3">
                <Checkbox checked={checked.checked2} onChange={(e) => setChecked({ ...checked, checked2: e.target.checked })}>Customer data privacy</Checkbox>
                <span className="italic block">
                  The personal data you provide is used to answer queries, process
                  orders or allow access to specific information. You have the
                  right to modify and delete all the personal information found in
                  the "My Account" page.
                </span>
              </div>
              <div className="mt-3">
                <Checkbox checked={checked.checked3} onChange={(e) => setChecked({ ...checked, checked3: e.target.checked })}>Sign up for our newsletter</Checkbox>
                <span className="italic block">
                  You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
                </span>
              </div>
              <div className="mt-5">
                <Checkbox checked={checked.checked4} onChange={(e) => setChecked({ ...checked, checked4: e.target.checked })}> I agree to the terms and conditions and the privacy policy</Checkbox>
              </div>
              <div className="flex justify-center ">
                <button className="primaryBtn text-sm font-medium w-[100px] mt-5" onClick={hanlde_Submit}>
                  {submitLoading ? "Loading ...": "Sign Up"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
