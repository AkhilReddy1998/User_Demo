import React from "react";
import Banner from "./Banner";
import Header from "../../Shared/Header";

function Dashboard() {
  return (
    <div>
      <Header />
        <section className="bg-White p-4">
          <Banner />
        </section>
    </div>
  );
}

export default Dashboard;
