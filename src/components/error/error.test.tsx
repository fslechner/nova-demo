import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { initialState } from "../../store/initialState";
import { Error, Props } from "./error";
import { fetchData, fetchStart } from "../../store/actions/actions";

const testCases: Array<[string, Props]> = [
  [
    "Error while loading",
    { location: "reports", isLoading: true, fetchData: jest.fn() }
  ],
  [
    "Error default",
    { location: "reports", isLoading: false, fetchData: jest.fn() }
  ]
];

describe("<Error>", () => {
  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Error {...options} />))).toMatchSnapshot();
    });
  });

  it("should handle the click event", () => {
    /*     const mockStore = configureStore();
    const store = mockStore(initialState);
    store.dispatch(fetchStart("reports"));

    const mock = shallow(
      <Error location="reports" fetchData={fetchStart("reports")}>
        Some text
      </Error>
    );
    mock.simulate("click");
    expect(window.alert).toHaveBeenCalledWith("clicked"); */
  });
});
