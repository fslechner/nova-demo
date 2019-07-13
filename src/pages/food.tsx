import React from "react";
import {
  Text,
  ReportsChartConnected as ReportsChart,
  InitiatorChartConnected as InitiatorChart
} from "../components";
import text from "../data/text.json";

document.title = "Demo App: Food recall enforcement reports";

export class Food extends React.PureComponent {
  render() {
    return (
      <div className="page-wrapper">
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
            topic={text.initiator.topic}
            text={text.initiator.text}
          />
          <InitiatorChart className="item" />
        </div>
      </div>
    );
  }
}

export default Food;
