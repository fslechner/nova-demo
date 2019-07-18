import React from "react";
import { Text } from "../../components";
import { ReportsChartD3 } from "./reportsChartD3/reportsChartD3";
import { InitiatorsChartD3 } from "./initiatorsChartD3/initiatorsChartD3";
import text from "../../utils/data/text.json";

document.title = "Demo App: Food recall enforcement reports with D3";

export class FoodRecallEnforcementD3 extends React.PureComponent {
  render() {
    return (
      <div className="">
        <Text
          topicTag="h1"
          topic={text.reports.topic}
          text={text.reports.text}
        />
        <ReportsChartD3 />
        <div className="flex-two-column">
          <Text
            className="item"
            topicTag="h2"
            topic={text.initiators.topic}
            text={text.initiators.text}
          />
          <InitiatorsChartD3 className="item" />
        </div>
      </div>
    );
  }
}

export default FoodRecallEnforcementD3;
