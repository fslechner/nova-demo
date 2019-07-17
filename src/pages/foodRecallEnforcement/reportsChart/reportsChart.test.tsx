import React from "react";
import { shallow, render } from "enzyme";
import toJson from "enzyme-to-json";
import { ReportsChartConnected, ReportsChart, Props } from "./reportsChart";
import { findByTestAttr, testStore } from "../../../utils/tests";
import { initialState } from "../../../store/initalState";
import { Provider } from "react-redux";
import { hcGlobal } from "../../../utils/charts/hcGlobal";
import { hcEnforcementReports } from "../../../utils/charts/hcEnforcementReports";

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
  let store: any;
  let wrapper: any;
  const testProps: any = {
    fetchData: jest.fn(),
    isLoading: false,
    hasError: false,
    chartOptions: { ...hcGlobal, ...hcEnforcementReports }
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
    expect(wrapper.props().chartOptions).toBe(testProps.chartOptions);
  });
});

describe("<Reports>", () => {
  let wrapper: any;
  const testProps: any = {
    fetchData: jest.fn(),
    isLoading: false,
    hasError: false,
    chartOptions: { ...hcGlobal, ...hcEnforcementReports }
  };

  beforeEach(() => {
    wrapper = render(<ReportsChart {...testProps} />);
  });

  /*   it("Render Search", () => {
    const search = findByTestAttr(wrapper, "search");
    expect(search.length).toBe(1);
  }); */

  /*   it("Render ChartHighstock", () => {
    const chart = findByTestAttr(wrapper, "chart");
    expect(chart.length).toBe(1);
  }); */
});
