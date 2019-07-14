import * as actions from ".";
import {
  FetchStart,
  FetchError,
  FetchSuccess,
  FetchReset,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_RESET
} from "../actions";

describe("sync actions", () => {
  it("should create an action to set isLoading for reports fetch", () => {
    const expectedAction: FetchStart = {
      type: FETCH_START,
      location: "reports"
    };
    expect(actions.fetchStart("reports")).toEqual(expectedAction);
  });

  /*   it("should create an action to set success for reports fetch", () => {
    const expectedAction: FetchSuccess = {
      type: FETCH_SUCCESS,
      payload: [],
      location: "reports"
    };
    expect(actions.fetchSuccess("reports")).toEqual(expectedAction);
  }); */

  it("should create an action to set hasError for reports fetch", () => {
    const expectedAction: FetchError = {
      type: FETCH_ERROR,
      location: "reports"
    };
    expect(actions.fetchError("reports")).toEqual(expectedAction);
  });

  it("should create an action to reset a fetching process for reports fetch", () => {
    const expectedAction: FetchReset = {
      type: FETCH_RESET,
      location: "reports"
    };
    expect(actions.fetchReset("reports")).toEqual(expectedAction);
  });
});
