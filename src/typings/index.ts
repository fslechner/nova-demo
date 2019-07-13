export interface AppState {
  reports: {
    isLoading: boolean;
    hasError: boolean;
    chartOptions: Highcharts.Options;
    /*   chartData: ChartData; */
  };
  initiator: {
    isLoading: boolean;
    hasError: boolean;
    chartOptions: Highcharts.Options;
    /* chartData: ChartData; */
  };
}

export type ChartData = Array<
  | number
  | [(number | string), (number | null)]
  | null
  | Highcharts.SeriesLineDataOptions
>;

export type ActionTypes = ActionTypesReports | ActionTypesInitiator;

export const FETCH_REPORTS_START = "FETCH_REPORTS_START";
export const FETCH_REPORTS_END = "FETCH_REPORTS_END";
export const FETCH_REPORTS_ERROR = "FETCH_REPORTS_ERROR";
export const FETCH_REPORTS_RESET = "FETCH_REPORTS_RESET";

export type ActionTypesReports =
  | fetchReportsStart
  | fetchReportsEnd
  | fetchReportsError
  | fetchReportsReset;

export interface fetchReportsStart {
  type: typeof FETCH_REPORTS_START;
}

export interface fetchReportsEnd {
  type: typeof FETCH_REPORTS_END;
  payload: [];
}

export interface fetchReportsError {
  type: typeof FETCH_REPORTS_ERROR;
}

export interface fetchReportsReset {
  type: typeof FETCH_REPORTS_RESET;
}

export const FETCH_INITIATOR_START = "FETCH_INITIATOR_START";
export const FETCH_INITIATOR_END = "FETCH_INITIATOR_END";
export const FETCH_INITIATOR_ERROR = "FETCH_INITIATOR_ERROR";

export type ActionTypesInitiator =
  | fetchInitiatorStart
  | fetchInitiatorEnd
  | fetchInitiatorError;

export interface fetchInitiatorStart {
  type: typeof FETCH_INITIATOR_START;
}

export interface fetchInitiatorEnd {
  type: typeof FETCH_INITIATOR_END;
  payload: [];
}

export interface fetchInitiatorError {
  type: typeof FETCH_INITIATOR_ERROR;
}
