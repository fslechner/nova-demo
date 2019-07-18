import moxios from "moxios";
import { initialState, AppState } from "../initalState";
import * as actions from ".";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("fetchReports action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("current", () => {
    const responseData: Array<(string | number)[]> = [
      ["20120620", 50],
      ["20120627", 109]
    ];

    const expectedActions = [{ type: actions.SET_DATA }];

    const store = mockStore(initialState);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: responseData
      });
    });

    return store.dispatch<any>(actions.fetchReports()).then(() => {
      /* const newState: AppState = store.getState();
      expect(newState.data.REPORTS).toBe(responseData); */
      const actions: any = store.getActions();
      //  expect(store.getActions()).toEqual(expectedActions);
      expect(actions[0]).toEqual(actions.setData());
    });
  });
});

describe("sync actions", () => {
  it("SET LOADING", () => {
    const expectedAction: actions.SetLoading = {
      type: actions.SET_LOADING,
      key: actions.REPORTS,
      isLoading: true
    };
    expect(actions.setLoading(actions.REPORTS, true)).toEqual(expectedAction);
  });

  it("SET_DATA", () => {
    const expectedAction: actions.SetData = {
      type: actions.SET_DATA,
      key: actions.REPORTS,
      payload: [["123", 1], ["456", 2]]
    };
    expect(actions.setData(actions.REPORTS, [["123", 1], ["456", 2]])).toEqual(
      expectedAction
    );
  });

  it("SET_ERROR", () => {
    const expectedAction: actions.SetError = {
      type: actions.SET_ERROR,
      key: actions.REPORTS,
      hasError: true
    };
    expect(actions.setError(actions.REPORTS, true)).toEqual(expectedAction);
  });
});
