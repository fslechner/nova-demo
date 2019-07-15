import React, { FC, HTMLAttributes } from "react";
import { Button } from "../components/button";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Is loading data */
  isLoading: boolean;
  /** ClickHandler for fetching data */
  fetchData: () => void;
}

export const Error: FC<Props> = ({ isLoading, fetchData }) => (
  <div className="error">
    <div className="text-center">
      <h4>An error occured</h4>
      <p>This Chart can't be shown. Click the reload button to try again.</p>
      <Button
        aria-label="Reloadbutton for reloading Chartdatas"
        className="error__button"
        iconName="refresh"
        iconAlign="after"
        iconSize="m"
        isLoading={isLoading}
        isLoadingSpin={true}
        onClick={() => fetchData()}
      >
        {isLoading ? "Loading" : "Reload"}
      </Button>
    </div>
  </div>
);

export default Error;
