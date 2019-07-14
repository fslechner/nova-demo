export type ActionTypes = ActionTypesReports | ActionTypesInitiators;

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_RESET = "FETCH_RESET";

export type ActionTypesReports =
  | fetchStart
  | fetchSuccess
  | fetchError
  | fetchReset;

export interface fetchStart {
  type: typeof FETCH_START;
  location: string;
}

export interface fetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: [];
  location: string;
}

export interface fetchError {
  type: typeof FETCH_ERROR;
  location: string;
}

export interface fetchReset {
  type: typeof FETCH_RESET;
  location: string;
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
