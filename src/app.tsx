import React, { FC } from "react";
import SwipeableRoutes from "react-swipeable-routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { FoodRecallEnforcement, FoodRecallEnforcementD3 } from "./pages";
import { Header, NotFound } from "./components";
import { navLinks } from "./utils/data/navLinks";

export const App: FC = () => (
  <Router>
    <div className="page-wrapper">
      <Header navLinks={navLinks} navLinksAlign="center" />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/highcharts" />} />
        <SwipeableRoutes enableMouseEvents>
          <Route path="/highcharts" component={FoodRecallEnforcement} />
          <Route path="/d3-js" component={FoodRecallEnforcementD3} />
        </SwipeableRoutes>
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
