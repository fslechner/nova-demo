import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "../reducers";
import { AppState } from "../typings";

export const initialState: AppState = {
  reports: {
    data: [],
    isLoading: false,
    hasError: false
  },
  initiator: {
    data: [],
    isLoading: false,
    hasError: false
  }
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
