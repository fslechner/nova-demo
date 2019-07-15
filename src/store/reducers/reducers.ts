import produce from "immer";
import { initialState, AppState } from "../initialState";
import {
  ActionTypes,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_RESET
} from "../actions/actions";

export const reducer = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case FETCH_START:
        draft[action.location].isLoading = true;
        return draft;
      case FETCH_SUCCESS:
        draft[action.location].isLoading = false;
        draft[action.location].hasError = false;
        console.log(action.payload);
        draft[action.location].chartOptions.series![0].data = action.payload;
        return draft;
      case FETCH_ERROR:
        draft[action.location].hasError = true;
        draft[action.location].isLoading = false;
        draft[action.location].chartOptions.series![0].data = [];
        return draft;
      case FETCH_RESET:
        draft[action.location].hasError = false;
        draft[action.location].isLoading = false;
        draft[action.location].chartOptions.series![0].data = [];
        return draft;
      default:
        return draft;
    }
  }
);
