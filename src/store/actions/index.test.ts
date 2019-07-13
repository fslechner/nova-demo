import * as actions from ".";
import {
  FETCH_REPORTS_START,
  FETCH_REPORTS_END,
  FETCH_REPORTS_ERROR,
  FETCH_REPORTS_RESET,
  FETCH_INITIATOR_START,
  FETCH_INITIATOR_END,
  FETCH_INITIATOR_ERROR
} from "../../typings";

describe("sync actions", () => {
  // Reports
  it("should create an action to set isLoading for reports fetch", () => {
    const expectedAction = {
      type: FETCH_REPORTS_START
    };
    expect(actions.fetchReportsStart()).toEqual(expectedAction);
  });

  it("should create an action to set hasError for reports fetch", () => {
    const expectedAction = {
      type: FETCH_REPORTS_ERROR
    };
    expect(actions.fetchReportsError()).toEqual(expectedAction);
  });

  it("should create an action to reset a fetching process for reports fetch", () => {
    const expectedAction = {
      type: FETCH_REPORTS_RESET
    };
    expect(actions.fetchReportsReset()).toEqual(expectedAction);
  });

  // Initiator
  it("should create an action to set isLoading for initiator fetch", () => {
    const expectedAction = {
      type: FETCH_INITIATOR_START
    };
    expect(actions.fetchInitiatorStart()).toEqual(expectedAction);
  });

  it("should create an action to set hasError for initiator fetch", () => {
    const expectedAction = {
      type: FETCH_INITIATOR_ERROR
    };
    expect(actions.fetchInitiatorError()).toEqual(expectedAction);
  });
});
