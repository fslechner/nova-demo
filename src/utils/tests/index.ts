// import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from "redux";
import { reducer } from "../../store/reducers/reducers";
import { middlewares } from "../../store";
import { AppState } from "../../store/initialState";

export const findByTestAtrr = (component: any, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = (initialState: AppState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(reducer, initialState);
};
