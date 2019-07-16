import produce from "immer";
import { initialState, AppState } from "..";
import { ActionTypes, SET_LOADING, SET_DATA, SET_ERROR } from "../actions";

export const reducer = produce(
  (draft: AppState = initialState, action: ActionTypes | any) => {
    switch (action.type) {
      case SET_LOADING:
        draft.isLoading[action.key] = action.isLoading;
        return draft;
      case SET_DATA:
        draft.data[action.key] = action.payload;
        return draft;
      case SET_ERROR:
        draft.hasError[action.key] = action.hasError;
        return draft;
      default:
        return draft;
    }
  }
);
