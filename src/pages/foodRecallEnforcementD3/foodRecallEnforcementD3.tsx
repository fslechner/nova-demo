import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import { ReportsChartD3Connected as ReportsChartD3 } from "./reportsChartD3/reportsChartD3";
import { InitiatorsChartD3Connected as InitiatorsChartD3 } from "./initiatorsChartD3/initiatorsChartD3";
import text from "../../utils/data/text.json";

export class FoodRecallEnforcementD3 extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>Food recall enforcement reports since 2012"</title>
        </Helmet>
        <div className="page">
          <Text
            topicTag="h1"
            topic={text.reports.topic}
            text={text.reports.text}
          />
          <ReportsChartD3 title={text.reports.chartTitle} />
          <div className="flex-two-column">
            <Text
              className="item"
              topicTag="h2"
              topic={text.initiators.topic}
              text={text.initiators.text}
            />
            <InitiatorsChartD3
              title={text.initiators.chartTitle}
              className="item"
            />
          </div>
        </div>
      </>
    );
  }
}

export default FoodRecallEnforcementD3;
