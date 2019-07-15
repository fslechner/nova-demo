import produce from "immer";
import moment from "moment";
import { reducer } from "./reducers";
import * as types from "../actions/actions";
import { initialState, AppState } from "../initialState";

describe("reducer", () => {
  it("should handle FETCH_START", () => {
    // reports
    const action: types.FetchStart = {
      type: types.FETCH_START,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.isLoading = true;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
    // initiators
    const action2: types.FetchStart = {
      type: types.FETCH_START,
      location: "initiators"
    };
    const nextState2: AppState = produce(initialState, draft => {
      draft.initiators.isLoading = true;
    });
    expect(reducer(initialState, action2)).toEqual(nextState2);
  });

  it("should handle FETCH_SUCCESS ", () => {
    // reports
    const mockData = [["20120620", 50], ["20120627", 109]];
    const action: types.FetchSuccess = {
      type: types.FETCH_SUCCESS,
      payload: mockData,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.hasError = false;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data = mockData;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
    // initiators
    const mockData2 = [
      ["Voluntary: Firm Initiated", 17690],
      ["FDA Mandated", 311]
    ];
    const action2: types.FetchSuccess = {
      type: types.FETCH_SUCCESS,
      payload: mockData2,
      location: "initiators"
    };
    const nextState2: AppState = produce(initialState, draft => {
      draft.initiators.hasError = false;
      draft.initiators.isLoading = false;
      draft.initiators.chartOptions.series![0].data = mockData2;
    });
    expect(reducer(initialState, action2)).toEqual(nextState2);
  });

  it("should handle FETCH_ERROR ", () => {
    // reports
    const action: types.FetchError = {
      type: types.FETCH_ERROR,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.hasError = true;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data = [];
    });

    expect(reducer(initialState, action)).toEqual(nextState);

    // initiators
    const action2: types.FetchError = {
      type: types.FETCH_ERROR,
      location: "initiators"
    };
    const nextState2: AppState = produce(initialState, draft => {
      draft.initiators.hasError = true;
      draft.initiators.isLoading = false;
      draft.initiators.chartOptions.series![0].data = [];
    });

    expect(reducer(initialState, action2)).toEqual(nextState2);
  });

  it("should handle RESET", () => {
    const action: types.FetchReset = {
      type: types.FETCH_RESET,
      location: "reports"
    };
    const nextState: AppState = produce(initialState, draft => {
      draft.reports.hasError = false;
      draft.reports.isLoading = false;
      draft.reports.chartOptions.series![0].data = [];
    });
    expect(reducer(initialState, action)).toEqual(nextState);

    const action2: types.FetchReset = {
      type: types.FETCH_RESET,
      location: "initiators"
    };
    const nextState2: AppState = produce(initialState, draft => {
      draft.initiators.hasError = false;
      draft.initiators.isLoading = false;
      draft.initiators.chartOptions.series![0].data = [];
    });
    expect(reducer(initialState, action2)).toEqual(nextState2);
  });
});
