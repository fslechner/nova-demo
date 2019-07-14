import produce from "immer";
import moment from "moment";
import { initialState, AppState } from "../initialState";
import {
  ActionTypes,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_RESET
} from "../../typings";

export const reducer = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case FETCH_START:
        draft[action.location].isLoading = true;
        return draft;
      case FETCH_SUCCESS:
        draft[action.location].isLoading = false;
        draft[action.location].hasError = false;
        if (action.location === "reports") {
          draft[
            action.location
          ].chartOptions.series![0].data = action.payload.map(
            (i: { time: number; count: number }) => [
              moment(i.time, "YYYY-MM-DD").valueOf(),
              i.count
            ]
          );
        }
        if (action.location === "initiators") {
          draft[
            action.location
          ].chartOptions.series![0].data = action.payload.map(
            (i: { term: string; count: number }) => [i.term, i.count]
          );
        }
        return draft;
      case FETCH_ERROR:
        draft[action.location].hasError = true;
        draft[action.location].isLoading = false;
        draft[action.location].chartOptions.series![0].data = [null];
        return draft;
      case FETCH_RESET:
        draft[action.location].hasError = false;
        draft[action.location].isLoading = false;
        draft[action.location].chartOptions.series![0].data = [null];
        return draft;
      default:
        return draft;
    }
  }
);
