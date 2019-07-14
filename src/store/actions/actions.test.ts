import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import * as actions from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("sync actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  /*   it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
    fetchMock.getOnce("/somepath", {
      body: { todos: ["do something"] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: actions.FETCH_START },
      { type: actions.FETCH_SUCCESS, body: { todos: ["do something"] } }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchData("reports")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
 */
  /*   it("should create an action to set success for reports fetch", () => {
    const expectedAction: FetchSuccess = {
      type: FETCH_SUCCESS,
      payload: [],
      location: "reports"
    };
    expect(actions.fetchSuccess("reports")).toEqual(expectedAction);
  }); */

  it("should create an action to set isLoading for reports fetch", () => {
    const expectedAction: actions.FetchStart = {
      type: actions.FETCH_START,
      location: "reports"
    };
    expect(actions.fetchStart("reports")).toEqual(expectedAction);
  });

  it("should create an action to set hasError for reports fetch", () => {
    const expectedAction: actions.FetchError = {
      type: actions.FETCH_ERROR,
      location: "reports"
    };
    expect(actions.fetchError("reports")).toEqual(expectedAction);
  });

  it("should create an action to reset a fetching process for reports fetch", () => {
    const expectedAction: actions.FetchReset = {
      type: actions.FETCH_RESET,
      location: "reports"
    };
    expect(actions.fetchReset("reports")).toEqual(expectedAction);
  });
});
