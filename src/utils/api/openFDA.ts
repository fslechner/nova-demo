import Axios, { AxiosRequestConfig } from "axios";
import moment from "moment";

export const axiosOpenFDA = Axios.create({
  baseURL: "https://api.fda.gov/"
});

interface OpenFDAResponse {
  meta: {};
  results: any;
}

export interface FoodReportsResponse {
  time: number;
  count: number;
}

export interface FoodInitiatorsResponse {
  term: string;
  count: number;
}

export const openFDA = {
  reports: (term: string): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`,
    transformResponse: (r: OpenFDAResponse) =>
      r.results.map((data: FoodReportsResponse) => [
        moment(data.time, "YYYYMMDD").valueOf(),
        data.count
      ])
  }),
  reportsD3: (term: string): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`,
    transformResponse: (r: OpenFDAResponse) =>
      r.results.map((data: FoodReportsResponse) => ({
        x: data.time,
        y: data.count
      }))
  }),
  initiators: (): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?count=voluntary_mandated.exact`,
    transformResponse: (r: OpenFDAResponse) =>
      r.results.map((i: FoodInitiatorsResponse) => [i.term, i.count])
  })
};
