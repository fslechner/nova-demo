import React, { FC } from "react";
import SwipeableViews from "react-swipeable-views";
import { FoodRecallEnforcement, FoodRecallEnforcementD3 } from "./pages";

export const App: FC = () => (
  <div className="page-wrapper">
    <SwipeableViews enableMouseEvents>
      <FoodRecallEnforcement />
      <FoodRecallEnforcementD3 />
    </SwipeableViews>
  </div>
);
