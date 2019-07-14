import produce from "immer";
import { reducer } from ".";
import * as types from "../actions";
import { initialState, AppState } from "../initialState";

describe("reducer", () => {
  it("should handle FETCH_START", () => {
    const action: types.FetchStart = {
      type: types.FETCH_START,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.isLoading = true;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });

  /*   it("should handle FETCH_SUCCESS", () => {
    const action: types.FetchSuccess = {
      type: types.FETCH_SUCCESS,
      payload: [],
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft[action.location].isLoading = false;
      draft[action.location].hasError = false;
      draft[action.location].chartOptions.series![0].data;
    });

    expect(reducer(initialState, action)).toEqual(nextState);
  }); */

  it("should handle FETCH_ERROR", () => {
    const action: types.FetchError = {
      type: types.FETCH_ERROR,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.hasError = true;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data;
    });

    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle RESET", () => {
    const action: types.FetchReset = {
      type: types.FETCH_RESET,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.hasError = false;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });
});
