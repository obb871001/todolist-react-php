import axios from "axios";
import { API_URL } from "../constant";

export const EDITBlogMessage = ({ index, uid, msg } = {}) => {
  return axios.post(`${API_URL}`, {
    method: "editBlogMessage",
    oauth: sessionStorage.getItem("sess_oauth"),
    blog_index: index,
    uid: uid,
    msg: msg,
  });
};
