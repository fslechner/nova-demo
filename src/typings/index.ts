export interface AppState {
  reports: {
    isLoading: boolean;
    hasError: boolean;
    chartOptions: Highcharts.Options;
  };
  initiators: {
    isLoading: boolean;
    hasError: boolean;
    chartOptions: Highcharts.Options;
  };
}

export type ActionTypes = ActionTypesReports | ActionTypesInitiators;

export const FETCH_REPORTS_START = "FETCH_REPORTS_START";
export const FETCH_REPORTS_SUCCESS = "FETCH_REPORTS_SUCCESS";
export const FETCH_REPORTS_ERROR = "FETCH_REPORTS_ERROR";
export const FETCH_REPORTS_RESET = "FETCH_REPORTS_RESET";

export type ActionTypesReports =
  | fetchReportsStart
  | fetchReportsSuccess
  | fetchReportsError
  | fetchReportsReset;

export interface fetchReportsStart {
  type: typeof FETCH_REPORTS_START;
}

export interface fetchReportsSuccess {
  type: typeof FETCH_REPORTS_SUCCESS;
  payload: [];
}

export interface fetchReportsError {
  type: typeof FETCH_REPORTS_ERROR;
}

export interface fetchReportsReset {
  type: typeof FETCH_REPORTS_RESET;
}

export const FETCH_INITIATORS_START = "FETCH_INITIATORS_START";
export const FETCH_INITIATORS_SUCCESS = "FETCH_INITIATORS_SUCCESS";
export const FETCH_INITIATORS_ERROR = "FETCH_INITIATORS_ERROR";

export type ActionTypesInitiators =
  | fetchInitiatorsStart
  | fetchInitiatorsSuccess
  | fetchInitiatorsError;

export interface fetchInitiatorsStart {
  type: typeof FETCH_INITIATORS_START;
}

export interface fetchInitiatorsSuccess {
  type: typeof FETCH_INITIATORS_SUCCESS;
  payload: [];
}

export interface fetchInitiatorsError {
  type: typeof FETCH_INITIATORS_ERROR;
}
