import React from "react";
import { Tab, Tabs } from "react-bootstrap";

//Components
import ProductStatistic from "./ProductStatistic";
import CartStatistic from "./CartStatistic";
import UserStatistic from "./UserStatistic";

function Statistic() {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Product">
          <ProductStatistic />
        </Tab>
        <Tab eventKey="profile" title="Cart">
          <CartStatistic />
        </Tab>
        <Tab eventKey="contact" title="User">
          <UserStatistic />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Statistic;
