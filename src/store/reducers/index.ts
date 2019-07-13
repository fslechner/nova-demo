import produce from "immer";
import moment from "moment";
import { initialState } from "../initialState";
import {
  AppState,
  ActionTypes,
  FETCH_REPORTS_START,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_ERROR,
  FETCH_REPORTS_RESET,
  FETCH_INITIATORS_START,
  FETCH_INITIATORS_SUCCESS,
  FETCH_INITIATORS_ERROR
} from "../../typings";

export const reducer = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case FETCH_REPORTS_START:
        draft.reports.isLoading = true;
        return draft;
      case FETCH_REPORTS_SUCCESS:
        draft.reports.isLoading = false;
        draft.reports.hasError = false;
        draft.reports.chartOptions.series![0].data = action.payload.map(
          (i: { time: number; count: number }) => [
            moment(i.time, "YYYY-MM-DD").valueOf(),
            i.count
          ]
        );
        return draft;
      case FETCH_REPORTS_ERROR:
        draft.reports.hasError = true;
        draft.reports.isLoading = false;
        draft.reports.chartOptions.series![0].data = [null];
        return draft;
      case FETCH_REPORTS_RESET:
        draft.reports.hasError = false;
        draft.reports.isLoading = false;
        draft.reports.chartOptions.series![0].data = [null];
        return draft;
      case FETCH_INITIATORS_START:
        draft.initiators.isLoading = true;
        return draft;
      case FETCH_INITIATORS_SUCCESS:
        draft.initiators.isLoading = false;
        draft.initiators.hasError = false;
        draft.initiators.chartOptions.series![0].data = action.payload.map(
          (i: { term: string; count: number }) => [i.term, i.count]
        );
        return draft;
      case FETCH_INITIATORS_ERROR:
        draft.initiators.hasError = true;
        draft.initiators.isLoading = false;
        draft.initiators.chartOptions.series![0].data = [null];
        return draft;
      default:
        return draft;
    }
  }
);
