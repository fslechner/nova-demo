import { applyMiddleware, createStore } from "redux";
import { reducer } from "../../store/reducers/reducers";
import { middlewares } from "../../store";
import { AppState } from "../../store/initialState";

export const findByTestAttr = (component: any, attr: string) =>
  component.find(`[data-test='${attr}']`);

export const testStore = (initialState: AppState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(reducer, initialState);
};
