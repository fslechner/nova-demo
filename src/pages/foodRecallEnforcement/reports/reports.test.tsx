import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ReportsConnected, Reports, Props } from "./reports";
import { findByTestAttr, testStore } from "../../../utils/tests";
import { initialState } from "../../../store/initialState";
import { Provider } from "react-redux";
import { hcGlobal } from "../../../utils/charts/hcGlobal";
import { hcEnforcementReports } from "../../../utils/charts/hcEnforcementReports";

describe("Reports snapshots", () => {
  const testCases: Array<[string, any]> = [
    [
      "default",
      {
        fetchData: jest.fn(),
        isLoading: false,
        hasError: false,
        chartOptions: { ...hcGlobal, ...hcEnforcementReports }
      }
    ],
    [
      "is loading",
      {
        fetchData: jest.fn(),
        isLoading: true,
        hasError: false,
        chartOptions: { ...hcGlobal, ...hcEnforcementReports }
      }
    ]
  ];

  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Reports {...options} />))).toMatchSnapshot();
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
        <ReportsConnected {...testProps} />
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
    wrapper = shallow(<Reports {...testProps} />);
  });

  it("Render Search", () => {
    const search = findByTestAttr(wrapper, "search");
    expect(search.length).toBe(1);
  });

  it("Render Text", () => {
    const text = findByTestAttr(wrapper, "text");
    expect(text.length).toBe(1);
  });

  it("Render ChartHighstock", () => {
    const chart = findByTestAttr(wrapper, "chart");
    expect(chart.length).toBe(1);
  });
});
