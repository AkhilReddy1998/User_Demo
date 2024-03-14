import React from "react";
import Header from "../Shared/Header";

const Layouts = ({ children }) => {

  return (
    <div >
      <Header />
      <div className="pt-5">{children}</div>
    </div>
  );
};

export default Layouts;
