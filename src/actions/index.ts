import openFDA from "../api/openFDA";
import { Dispatch } from "redux";
import {
  FETCH_REPORTS_START,
  FETCH_REPORTS_END,
  FETCH_REPORTS_ERROR,
  FETCH_REPORTS_RESET,
  FETCH_INITIATOR_START,
  FETCH_INITIATOR_END,
  FETCH_INITIATOR_ERROR
} from "../typings";

// Reports Actions
export const fetchReports = (term: string = "") => async (
  dispatch: Dispatch
) => {
  dispatch(fetchReportsStart());
  openFDA
    .get(
      `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`
    )
    .then(res => {
      dispatch(
        dispatch({ type: FETCH_REPORTS_END, payload: res.data.results })
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

export const fetchInitiator = () => async (dispatch: Dispatch) => {
  dispatch(fetchInitiatorStart());
  openFDA
    .get(`food/enforcement.json?count=voluntary_mandated.exact`)
    .then(res => {
      dispatch(
        dispatch({ type: FETCH_INITIATOR_END, payload: res.data.results })
      );
    })
    .catch(err => {
      dispatch(fetchInitiatorError());
    });
};

export const fetchInitiatorStart = () => {
  return {
    type: FETCH_INITIATOR_START
  };
};

export const fetchInitiatorError = () => {
  return {
    type: FETCH_INITIATOR_ERROR
  };
};
