import React from "react";
import { Text } from "../../components";
import { InitiatorsChartConnected as InitiatorsChart } from "./initiatorsChart/initiatorsChart";
import { ReportsChartConnected as ReportsChart } from "./reportsChart/reportsChart";

import text from "../../utils/data/text.json";

document.title = "Demo App: Food recall enforcement reports";

export class FoodRecallEnforcement extends React.PureComponent {
  render() {
    return (
      <div className="page">
        <Text
          topicTag="h1"
          topic={text.reports.topic}
          text={text.reports.text}
        />
        <ReportsChart />
        <div className="flex-two-column">
          <Text
            className="item"
            topicTag="h2"
            topic={text.initiators.topic}
            text={text.initiators.text}
          />
          <InitiatorsChart className="item" />
        </div>
      </div>
    );
  }
}

export default FoodRecallEnforcement;
