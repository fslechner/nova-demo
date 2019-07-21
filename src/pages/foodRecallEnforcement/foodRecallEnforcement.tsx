import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import { InitiatorsChartConnected as InitiatorsChart } from "./initiatorsChart/initiatorsChart";
import { ReportsChartConnected as ReportsChart } from "./reportsChart/reportsChart";
import text from "../../utils/data/text.json";

export class FoodRecallEnforcement extends PureComponent {
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
            textHidden={text.reports.textHidden}
          />
          <ReportsChart />
          <div className="flex-two-column">
            <Text
              className="item"
              topicTag="h2"
              topic={text.initiators.topic}
              text={text.initiators.text}
              textHidden={text.initiators.textHidden}
            />
            <InitiatorsChart className="item" />
          </div>
        </div>
      </>
    );
  }
}

export default FoodRecallEnforcement;
