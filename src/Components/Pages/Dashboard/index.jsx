import React from "react";
import Layouts from "../../Layouts";
import Banner from "./Banner";

function Dashboard() {
  return (
    <Layouts>
        <section className="bg-White p-4">
          <Banner />
        </section>
    </Layouts>
  );
}

export default Dashboard;
