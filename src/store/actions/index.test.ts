import * as actions from ".";

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
