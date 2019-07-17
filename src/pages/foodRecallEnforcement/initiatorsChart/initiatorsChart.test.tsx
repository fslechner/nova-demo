import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Store } from "redux";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import {
  InitiatorsChartConnected,
  InitiatorsChart,
  Props
} from "./initiatorsChart";

import { testStore, findByTestAttr } from "../../../utils/tests";
import { initialState, AppState } from "../../../store/initalState";
import { ActionTypes } from "../../../store/actions";

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
  let store: Store<AppState, ActionTypes>;
  let wrapper: ShallowWrapper<Props>;
  const testProps: Props = {
    fetchInitiators: jest.fn(),
    isLoading: false,
    hasError: false,
    data: []
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
    expect(wrapper.props().data).toBe(testProps.data);
  });
});

describe("<Initiators>", () => {
  let wrapper: ShallowWrapper<Props>;
  const testProps: Props = {
    fetchInitiators: jest.fn(),
    isLoading: false,
    hasError: false,
    data: []
  };
  beforeEach(() => {
    wrapper = shallow(<InitiatorsChart {...testProps} />);
  });

  it("Render ChartHighstock", () => {
    const chart = findByTestAttr(wrapper, "chart");
    expect(chart.length).toBe(1);
  });
});
