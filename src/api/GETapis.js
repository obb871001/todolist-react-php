import axios from "axios";
import { API_URL } from "../constant";

export const GETblogList = () => {
  return axios.post(`${API_URL}`, {
    method: "GETbloglist",
  });
};
