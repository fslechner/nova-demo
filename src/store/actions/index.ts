import openFDA from "../../static/api/openFDA";
import { Dispatch } from "redux";
import {
  FETCH_REPORTS_START,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_ERROR,
  FETCH_REPORTS_RESET,
  FETCH_INITIATORS_START,
  FETCH_INITIATORS_SUCCESS,
  FETCH_INITIATORS_ERROR
} from "../../typings";

// Reports Actions
export const fetchReports = (term: string = "") => (dispatch: Dispatch) => {
  dispatch(fetchReportsStart());
  openFDA
    .get(
      `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`
    )
    .then(res => {
      dispatch(
        dispatch({ type: FETCH_REPORTS_SUCCESS, payload: res.data.results })
      );
    })
    .catch(err => {
      if (!err.response || err.response.status !== 404) {
        dispatch(fetchReportsError());
      } else {
        dispatch(fetchReportsReset());
      }
    });
};

export const fetchReportsStart = () => {
  return {
    type: FETCH_REPORTS_START
  };
};

export const fetchReportsError = () => {
  return {
    type: FETCH_REPORTS_ERROR
  };
};

export const fetchReportsReset = () => {
  return {
    type: FETCH_REPORTS_RESET
  };
};

// Initiator Actions

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
