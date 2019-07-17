import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import { Store } from "redux";
import { ReportsChartConnected, ReportsChart, Props } from "./reportsChart";
import { testStore, findByTestAttr } from "../../../utils/tests";
import { Provider } from "react-redux";
import { initialState, AppState } from "../../../store/initalState";
import { ActionTypes } from "../../../store/actions";

describe("Reports snapshots", () => {
  const testCases: Array<[string, Props]> = [
    [
      "default",
      {
        fetchReports: jest.fn(),
        isLoading: false,
        hasError: false,
        data: [["123456", 100], ["123456", 50], ["123456", 25]]
      }
    ],
    [
      "is loading",
      {
        fetchReports: jest.fn(),
        isLoading: true,
        hasError: false,
        data: [["123456", 100], ["123456", 50], ["T123456", 25]]
      }
    ],
    [
      "has error",
      {
        fetchReports: jest.fn(),
        isLoading: false,
        hasError: true,
        data: [["123456", 100], ["123456", 50], ["T123456", 25]]
      }
    ]
  ];

  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<ReportsChart {...options} />))).toMatchSnapshot();
    });
  });
});

describe("<ReportsConnected>", () => {
  let store: Store<AppState, ActionTypes>;
  let wrapper: ShallowWrapper<Props>;
  const testProps: Props = {
    fetchReports: jest.fn(),
    isLoading: false,
    hasError: false,
    data: []
  };

  beforeEach(() => {
    store = testStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <ReportsChartConnected {...testProps} />
      </Provider>
    ).dive();
  });

  it("Test connected props", () => {
    expect(wrapper.props().isLoading).toBe(false);
    expect(wrapper.props().hasError).toBe(false);
    expect(wrapper.props().data).toBe(testProps.data);
  });
});

describe("<Reports>", () => {
  let wrapper: ShallowWrapper<Props>;
  const testProps: Props = {
    fetchReports: jest.fn(),
    isLoading: false,
    hasError: false,
    data: []
  };

  beforeEach(() => {
    wrapper = shallow(<ReportsChart {...testProps} />);
  });

  it("Render Search", () => {
    const search = findByTestAttr(wrapper, "search");
    expect(search.length).toBe(1);
  });

  it("Render ChartHighstock", () => {
    const chart = findByTestAttr(wrapper, "chart");
    expect(chart.length).toBe(1);
  });
});
