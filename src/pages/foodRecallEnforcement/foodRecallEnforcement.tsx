import React from "react";
import { ReportsConnected } from "./reports/reports";
import { InitiatorsConnected } from "./initiators/initiators";

document.title = "Demo App: Food recall enforcement reports";

export class FoodRecallEnforcement extends React.PureComponent {
  render() {
    return (
      <div className="page-wrapper">
        <ReportsConnected location="reports" term="" data-test="reports" />
        <InitiatorsConnected location="initiators" data-test="initiators" />
      </div>
    );
  }
}

export default FoodRecallEnforcement;
