import React from "react";
import Header from "../Shared/Header";

const Layouts = ({ children }) => {

  return (
    <div >
      <Header />
      <div className="pt-5 bg-bgColor min-h-screen">
        <div className="w-[95%] mx-auto">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layouts;
