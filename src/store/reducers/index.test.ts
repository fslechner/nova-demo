import produce from "immer";
import { reducer } from ".";
import * as types from "../../typings";
import { initialState } from "../initialState";

describe("reducer", () => {
  it("should handle FETCH_REPORTS_START", () => {
    const action: types.fetchReportsStart = {
      type: types.FETCH_REPORTS_START
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.reports.isLoading = true;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle FETCH_REPORTS_END", () => {
    const action: types.fetchReportsEnd = {
      type: types.FETCH_REPORTS_END,
      payload: []
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.reports.isLoading = false;
      draft.reports.hasError = false;
      draft.reports.chartOptions.series![0].data;
    });

    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle FETCH_REPORTS_ERROR", () => {
    const action: types.fetchReportsError = {
      type: types.FETCH_REPORTS_ERROR
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.reports.hasError = true;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data;
    });

    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle FETCH_REPORTS_RESET", () => {
    const action: types.fetchReportsReset = {
      type: types.FETCH_REPORTS_RESET
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.reports.hasError = false;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle FETCH_INITIATOR_START", () => {
    const action: types.fetchInitiatorStart = {
      type: types.FETCH_INITIATOR_START
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.initiator.isLoading = true;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle FETCH_INITIATOR_END", () => {
    const action: types.fetchInitiatorEnd = {
      type: types.FETCH_INITIATOR_END,
      payload: []
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.initiator.isLoading = false;
      draft.initiator.hasError = false;
      draft.reports.chartOptions.series![0].data;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });

  it("should handle FETCH_INITIATOR_ERROR", () => {
    const action: types.fetchInitiatorError = {
      type: types.FETCH_INITIATOR_ERROR
    };
    const nextState: types.AppState = produce(initialState, draft => {
      draft.initiator.hasError = true;
      draft.initiator.isLoading = false;
      draft.reports.chartOptions.series![0].data;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
  });
});
