import Axios from "axios";

export const axiosOpenFDA = Axios.create({
  baseURL: "https://api.fda.gov/"
});
