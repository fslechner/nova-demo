import produce from "immer";
import { reducer } from ".";
import * as actions from "../actions";
import { initialState, AppState } from "../initalState";

describe("reducer", () => {
  it("DEFAULT", () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("SET_LOADING", () => {
    // reports
    const action: actions.SetLoading = {
      type: actions.SET_LOADING,
      key: actions.REPORTS,
      isLoading: true
    };
    const nextState: AppState = produce(initialState, (draft: AppState) => {
      draft.isLoading.REPORTS = true;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
    // initiators
    const action2: actions.SetLoading = {
      type: actions.SET_LOADING,
      key: actions.INITIATORS,
      isLoading: true
    };
    const nextState2: AppState = produce(initialState, (draft: AppState) => {
      draft.isLoading.INITIATORS = true;
    });
    expect(reducer(initialState, action2)).toEqual(nextState2);
  });

  it("SET_DATA", () => {
    // reports
    const action: actions.SetData = {
      type: actions.SET_DATA,
      payload: [["20120620", 50], ["20120627", 109]],
      key: actions.REPORTS
    };
    const nextState: AppState = produce(initialState, (draft: AppState) => {
      draft.data.REPORTS = [["20120620", 50], ["20120627", 109]];
    });
    expect(reducer(initialState, action)).toEqual(nextState);
    // initiators
    const mockData2 = [
      ["Voluntary: Firm Initiated", 17690],
      ["FDA Mandated", 311]
    ];
    const action2: actions.SetData = {
      type: actions.SET_DATA,
      payload: mockData2,
      key: actions.INITIATORS
    };
    const nextState2: AppState = produce(initialState, (draft: AppState) => {
      draft.data.INITIATORS = mockData2;
    });
    expect(reducer(initialState, action2)).toEqual(nextState2);
  });

  it("SET_ERROR", () => {
    // reports
    const action: actions.SetError = {
      type: actions.SET_ERROR,
      key: actions.REPORTS,
      hasError: true
    };
    const nextState: AppState = produce(initialState, (draft: AppState) => {
      draft.hasError.REPORTS = true;
    });
    expect(reducer(initialState, action)).toEqual(nextState);
    // initiators
    const action2: actions.SetError = {
      type: actions.SET_ERROR,
      key: actions.INITIATORS,
      hasError: true
    };
    const nextState2: AppState = produce(initialState, (draft: AppState) => {
      draft.hasError.INITIATORS = true;
    });
    expect(reducer(initialState, action2)).toEqual(nextState2);
  });
});
