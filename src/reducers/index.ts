import produce from "immer";
import moment from "moment";
import { initialState } from "../store/initialState";
import {
  AppState,
  ActionTypes,
  FETCH_REPORTS_START,
  FETCH_REPORTS_END,
  FETCH_REPORTS_ERROR,
  FETCH_REPORTS_RESET,
  FETCH_INITIATOR_START,
  FETCH_INITIATOR_END,
  FETCH_INITIATOR_ERROR
} from "../typings";

export const reducer = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case FETCH_REPORTS_START:
        draft.reports.isLoading = true;
        return draft;
      case FETCH_REPORTS_END:
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
      case FETCH_INITIATOR_START:
        draft.initiator.isLoading = true;
        return draft;
      case FETCH_INITIATOR_END:
        draft.initiator.isLoading = false;
        draft.initiator.hasError = false;
        draft.initiator.chartOptions.series![0].data = action.payload.map(
          (i: { term: string; count: number }) => [i.term, i.count]
        );
        return draft;
      case FETCH_INITIATOR_ERROR:
        draft.initiator.hasError = true;
        draft.initiator.isLoading = false;
        draft.initiator.chartOptions.series![0].data = [null];
        return draft;
      default:
        return draft;
    }
  }
);
