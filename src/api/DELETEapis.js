import axios from "axios";
import { API_URL } from "../constant";

export const DELETEBlogMessage = ({ index, uid } = {}) => {
  return axios.post(`${API_URL}`, {
    method: "deleteBlogMessage",
    oauth: sessionStorage.getItem("sess_oauth"),
    blog_index: index,
    uid: uid,
  });
};
