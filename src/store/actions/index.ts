import openFDA from "../../setttings/api/openFDA";
import { Dispatch } from "redux";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_RESET = "FETCH_RESET";

export type ActionTypes = FetchStart | FetchSuccess | FetchError | FetchReset;

export interface FetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: [];
  location: string;
  term?: string;
}

export const fetchData = (location: string, term: string = ""): any => (
  dispatch: Dispatch
) => {
  dispatch(fetchStart(location));
  openFDA
    .get(
      location === "reports"
        ? `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`
        : `food/enforcement.json?count=voluntary_mandated.exact`
    )
    .then(res => {
      dispatch(
        dispatch({ type: FETCH_SUCCESS, payload: res.data.results, location })
      );
    })
    .catch(err => {
      if (!err.response || err.response.status !== 404) {
        dispatch(fetchError(location));
      } else {
        dispatch(fetchReset(location));
      }
    });
};

export interface FetchStart {
  type: typeof FETCH_START;
  location: string;
}

export const fetchStart = (location: string): FetchStart => {
  return {
    type: FETCH_START,
    location
  };
};

export interface FetchError {
  type: typeof FETCH_ERROR;
  location: string;
}

export const fetchError = (location: string): FetchError => {
  return {
    type: FETCH_ERROR,
    location
  };
};

export interface FetchReset {
  type: typeof FETCH_RESET;
  location: string;
}

export const fetchReset = (location: string): FetchReset => {
  return {
    type: FETCH_RESET,
    location
  };
};

/* 
export const fetchInitiators = () => (dispatch: Dispatch) => {
  dispatch(fetchInitiatorsStart());
  openFDA
    .get(`food/enforcement.json?count=voluntary_mandated.exact`)
    .then(res => {
      dispatch(
        dispatch({ type: FETCH_INITIATORS_SUCCESS, payload: res.data.results })
      );
    })
    .catch(err => {
      dispatch(fetchInitiatorsError());
    });
};

export const fetchInitiatorsStart = () => {
  return {
    type: FETCH_INITIATORS_START
  };
};

export const fetchInitiatorsError = () => {
  return {
    type: FETCH_INITIATORS_ERROR
  };
};
 */
