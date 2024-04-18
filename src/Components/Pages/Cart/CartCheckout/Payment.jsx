import { Checkbox, Radio } from "antd";
import React, { useState } from "react";
import useNavigation from "../../../../PageRouting/HandleNavigator";

function Payment() {
  const [selectedValue, setSelectedValue] = useState(0);
  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const {navigateTo} = useNavigation();
  return (
    <div className="px-7">
      <Radio.Group
        name="radiogroup"
        defaultValue={0}
        onChange={handleRadioChange}
      >
        <Radio className="block mb-2" value={1}>
          <span className="ml-5 text-sm">Pay by Check</span>
          {selectedValue === 1 && (
            <div className="radiovalue1 px-11 mt-5">
              <p className="text-secondaryText text-sm">
                Please send us your check including the following details:
              </p>
            </div>
          )}
        </Radio>
        <Radio className="block mb-2" value={2}>
          <span className="ml-5 text-sm ">Pay by bank wire</span>
          {selectedValue === 2 && (
            <div className="radiovalue2 px-11 mt-5">
              <p className="text-secondaryText text-sm">
                Please transfer the invoice amount to our bank account. You will
                receive our order confirmation by email containing bank details
                and order number. Goods will be reserved 7 days for you and
                we'll process the order immediately after receiving the payment.
              </p>
            </div>
          )}
        </Radio>
      </Radio.Group>

      <div className="mt-6">
        <Checkbox>
          <div className="ml-5">
            I agree to the{" "}
            <span className="text-primaryColor cursor-pointer">
              Terms Of Service
            </span>{" "}
            and will adhere to them unconditionally.
          </div>
        </Checkbox>
      </div>
      <div className="flex justify-center mt-3">
        <button onClick={() => navigateTo("order-confirmation")} className="capitalize bg-primaryColor text-White hover:bg-primaryText h-10 px-5 rounded-md">
          Order with an Obligation to pay
        </button>
      </div>
    </div>
  );
}

export default Payment;
