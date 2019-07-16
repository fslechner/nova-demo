import { applyMiddleware, createStore } from "redux";
import { reducer } from "../../store/reducers";
import thunk from "redux-thunk";
import { AppState } from "../../store";

export const findByTestAttr = (component: any, attr: string) =>
  component.find(`[data-test='${attr}']`);

export const testStore = (initialState: AppState) => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};
