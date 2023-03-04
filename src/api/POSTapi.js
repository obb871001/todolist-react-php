import axios from "axios";
import { API_URL } from "../constant";

export const POSTBlogMessage = ({ message, uid, userId } = {}) => {
  return axios.post(`${API_URL}`, {
    method: "createBlogMessage",
    oauth: sessionStorage.getItem("sess_oauth"),
    message: message,
    uid: uid,
    userId: userId,
  });
};
