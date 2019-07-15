import Axios, { AxiosRequestConfig } from "axios";
import moment from "moment";

export const axiosOpenFDA = Axios.create({
  baseURL: "https://api.fda.gov/"
});

interface OpenFDAResponse {
  meta: {};
  results: [];
}

export const openFDA = {
  reports: (term: string): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?search=reason_for_recall:"${term}"&count=report_date`,
    transformResponse: (r: OpenFDAResponse) =>
      r.results.map((i: { time: number; count: number }) => [
        moment(i.time, "YYYY-MM-DD").valueOf(),
        i.count
      ])
  }),
  initiators: (): AxiosRequestConfig => ({
    method: "get",
    responseType: "json",
    url: `food/enforcement.json?count=voluntary_mandated.exact`,
    transformResponse: (r: OpenFDAResponse) =>
      r.results.map((i: { term: string; count: number }) => [i.term, i.count])
  })
};
