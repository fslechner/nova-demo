import React, { FC } from "react";
import SwipeableRoutes from "react-swipeable-routes";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { FoodRecallEnforcement, FoodRecallEnforcementD3 } from "./pages";
import { Header, NotFound } from "./components";
import { navLinks } from "./utils/data/navLinks";
import { LinebarChart } from "./components";

export const App: FC = () => (
  <Router>
    <div className="page-wrapper">
      <Header navLinks={navLinks} navLinksAlign="center" />
      <Route exact path="/" render={() => <Redirect to="/highcharts" />} />
      {/*  <Switch> */}
      <SwipeableRoutes>
        <Route path="/highcharts" component={FoodRecallEnforcement} />
        <Route path="/d3-js" component={FoodRecallEnforcementD3} />
      </SwipeableRoutes>
      <Route path="*" component={NotFound} />
      {/*     </Switch> */}
    </div>
  </Router>
);
