import { axiosOpenFDA, openFDA } from "../../utils/api/openFDA";
import { Dispatch } from "redux";
import { AxiosResponse, AxiosError } from "axios";

export const REPORTS = "REPORTS";
export const REPORTS_D3 = "REPORTS_D3";
export const INITIATORS = "INITIATORS";

export type Keys = typeof REPORTS | typeof INITIATORS | typeof REPORTS_D3;

export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";
export const SET_ERROR = "SET_ERROR";

export type ActionTypes = SetLoading | SetData | SetError;

export interface SetData {
  type: typeof SET_DATA;
  payload: Array<(string | number)[]>;
  key: Keys;
}

export const fetchReports = (term: string = "") => (dispatch: Dispatch) => {
  dispatch(setLoading(REPORTS, true));
  axiosOpenFDA(openFDA.reports(term))
    .then((res: AxiosResponse) => {
      dispatch(setData(REPORTS, res.data));
      dispatch(setLoading(REPORTS, false));
    })
    .catch((err: AxiosError) => {
      if (!err.response || err.response.status !== 404) {
        dispatch(setError(REPORTS, true));
      } else {
        dispatch(setData(REPORTS, []));
      }
      dispatch(setLoading(REPORTS, false));
    });
};

export const fetchReportsD3 = (term: string = "") => (dispatch: Dispatch) => {
  dispatch(setLoading(REPORTS_D3, true));
  axiosOpenFDA(openFDA.reportsD3(term))
    .then((res: AxiosResponse) => {
      dispatch(setData(REPORTS_D3, res.data));
      dispatch(setLoading(REPORTS_D3, false));
    })
    .catch((err: AxiosError) => {
      if (!err.response || err.response.status !== 404) {
        dispatch(setError(REPORTS_D3, true));
      } else {
        dispatch(setData(REPORTS_D3, []));
      }
      dispatch(setLoading(REPORTS_D3, false));
    });
};

export const fetchInitiators = () => (dispatch: Dispatch) => {
  dispatch(setLoading(INITIATORS, true));
  axiosOpenFDA(openFDA.initiators())
    .then((res: AxiosResponse) => {
      dispatch(setData(INITIATORS, res.data));
      dispatch(setLoading(INITIATORS, false));
    })
    .catch((err: AxiosError) => {
      dispatch(setError(INITIATORS, true));
      dispatch(setLoading(INITIATORS, false));
    });
};

export interface SetLoading {
  type: typeof SET_LOADING;
  key: Keys;
  isLoading: boolean;
}

export const setLoading = (key: Keys, isLoading: boolean): SetLoading => {
  return {
    type: SET_LOADING,
    key,
    isLoading
  };
};

export interface SetData {
  type: typeof SET_DATA;
  key: Keys;
  payload: Array<(string | number)[]>;
}

export const setData = (
  key: Keys,
  payload: Array<(string | number)[]>
): SetData => {
  return {
    type: SET_DATA,
    key,
    payload
  };
};

export interface SetError {
  type: typeof SET_ERROR;
  key: Keys;
  hasError: boolean;
}

export const setError = (key: Keys, hasError: boolean): SetError => {
  return {
    type: SET_ERROR,
    key,
    hasError
  };
};
