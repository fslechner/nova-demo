import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

export interface AppState {
  isLoading: {
    [key: string]: boolean;
  };
  hasError: {
    [key: string]: boolean;
  };
  data: {
    [key: string]: Array<(string | number)[]>;
  };
}

export type Path = string;

export const initialState: AppState = {
  isLoading: {
    REPORTS: false,
    INITIATORS: false
  },
  hasError: {
    REPORTS: false,
    INITIATORS: false
  },
  data: {
    REPORTS: [],
    INITIATORS: []
  }
};

export const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
