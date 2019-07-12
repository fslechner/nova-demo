import React, { FC, Fragment } from "react";
import { SharedProps } from "../typings";

export interface Props extends SharedProps {
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
      <button
        aria-label="Reloadbutton for reloading Chartdatas"
        className="error__button"
        onClick={() => fetchData()}
        disabled={isLoading}
      >
        {isLoading ? (
          <Fragment>
            <span>Loading </span>
            <span className="reload-icon spin">&#8635;</span>
          </Fragment>
        ) : (
          <Fragment>
            <span>Reload</span>
            <span className="reload-icon">&#8635;</span>
          </Fragment>
        )}
      </button>
    </div>
  </div>
);

export default Error;
