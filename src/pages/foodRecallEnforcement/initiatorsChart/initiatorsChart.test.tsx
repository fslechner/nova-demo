import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import {
  InitiatorsChartConnected,
  InitiatorsChart,
  Props
} from "./initiatorsChart";
import { Provider } from "react-redux";
import { findByTestAttr, testStore } from "../../../utils/tests";
import { initialState } from "../../../store/initalState";
import { hcGlobal } from "../../../utils/charts/hcGlobal";
import { hcEnforcementInitiators } from "../../../utils/charts/hcEnforcementInitiators";

describe("Initiator snapshots", () => {
  const testCases: Array<[string, Props]> = [
    [
      "default",
      {
        fetchInitiators: jest.fn(),
        isLoading: false,
        hasError: false,
        data: [["First Group", 100], ["Second Group", 50], ["Third Group", 25]]
      }
    ],
    [
      "is loading",
      {
        fetchInitiators: jest.fn(),
        isLoading: true,
        hasError: false,
        data: [["First Group", 100], ["Second Group", 50], ["Third Group", 25]]
      }
    ],
    [
      "has error",
      {
        fetchInitiators: jest.fn(),
        isLoading: false,
        hasError: true,
        data: [["First Group", 100], ["Second Group", 50], ["Third Group", 25]]
      }
    ]
  ];

  testCases.forEach(([item, options]) => {
    it(item, () => {
      expect(
        toJson(shallow(<InitiatorsChart {...options} />))
      ).toMatchSnapshot();
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
        <InitiatorsChartConnected {...testProps} />
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
    wrapper = shallow(<InitiatorsChart {...testProps} />);
  });

  /*   it("Render ChartHighstock", () => {
    const chart = findByTestAttr(wrapper, "chart");
    expect(chart.length).toBe(1);
  }); */
});
