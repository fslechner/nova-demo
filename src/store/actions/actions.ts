import { axiosOpenFDA, openFDA } from "../../utils/api/openFDA";
import { Dispatch } from "redux";
import { AxiosResponse, AxiosError } from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_RESET = "FETCH_RESET";

export type ActionTypes = FetchStart | FetchSuccess | FetchError | FetchReset;

export interface FetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: any;
  location: string;
}

export const fetchReports = (term: string = "") => (dispatch: Dispatch) => {
  dispatch(fetchStart("reports"));
  axiosOpenFDA(openFDA.reports(term))
    .then((res: AxiosResponse) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
        location: "reports"
      });
    })
    .catch((err: AxiosError) => {
      if (!err.response || err.response.status !== 404) {
        dispatch(fetchError("reports"));
      } else {
        dispatch(fetchReset("reports"));
      }
    });
};

export const fetchInitiators = () => (dispatch: Dispatch) => {
  dispatch(fetchStart("initiators"));
  axiosOpenFDA(openFDA.initiators())
    .then((res: AxiosResponse) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
        location: "initiators"
      });
    })
    .catch((err: AxiosError) => {
      dispatch(fetchError("initiators"));
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

export const fetchReset = (location: string) => {
  return {
    type: FETCH_RESET,
    location
  };
};
