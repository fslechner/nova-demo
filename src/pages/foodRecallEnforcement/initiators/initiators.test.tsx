import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { InitiatorsConnected, Initiators, Props } from "./initiators";
import { Provider } from "react-redux";
import { findByTestAttr, testStore } from "../../../utils/tests";
import { initialState } from "../../../store/initialState";
import { hcGlobal } from "../../../utils/charts/hcGlobal";
import { hcEnforcementInitiators } from "../../../utils/charts/hcEnforcementInitiators";

describe("Initiator snapshots", () => {
  const testCases: Array<[string, any]> = [
    [
      "default",
      {
        fetchData: jest.fn(),
        isLoading: false,
        hasError: false,
        chartOptions: { ...hcGlobal, ...hcEnforcementInitiators }
      }
    ],
    [
      "is loading",
      {
        fetchData: jest.fn(),
        isLoading: true,
        hasError: false,
        chartOptions: { ...hcGlobal, ...hcEnforcementInitiators }
      }
    ]
  ];

  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(toJson(shallow(<Initiators {...options} />))).toMatchSnapshot();
    });
  });
});

describe("<InitiatorsConnected>", () => {
  let store: any;
  let wrapper: any;
  const testProps: any = {
    fetchData: jest.fn(),
    isLoading: false,
    hasError: false,
    chartOptions: { ...hcGlobal, ...hcEnforcementInitiators }
  };

  beforeEach(() => {
    store = testStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <InitiatorsConnected {...testProps} />
      </Provider>
    ).dive();
  });

  it("Test connected props", () => {
    expect(wrapper.props().isLoading).toBe(false);
    expect(wrapper.props().hasError).toBe(false);
    expect(wrapper.props().chartOptions).toBe(testProps.chartOptions);
  });
});

describe("<Initiators>", () => {
  let wrapper: any;
  const testProps: any = {
    fetchData: jest.fn(),
    isLoading: false,
    hasError: false,
    chartOptions: { ...hcGlobal, ...hcEnforcementInitiators }
  };

  beforeEach(() => {
    wrapper = shallow(<Initiators {...testProps} />);
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
