import React from "react";
import { ReportsConnected } from "./reports/reports";
import { InitiatorsConnected } from "./initiators/initiators";

document.title = "Demo App: Food recall enforcement reports";

export class FoodRecallEnforcement extends React.PureComponent {
  render() {
    return (
      <div className="page-wrapper" data-test="FoodRecallEnforcement">
        <ReportsConnected location="reports" term="" />
        <InitiatorsConnected location="initiators" />
      </div>
    );
  }
}

export default FoodRecallEnforcement;
