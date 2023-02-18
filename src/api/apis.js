import axios from "axios";
import { API_URL } from "../constant";
const FormHeaders = {
  "Content-Type": "multipart/form-data",
};
export const SignInWeb = ({ email, password } = {}) => {
  return axios.post(`${API_URL}`, {
    method: "login",
    email: email,
    password: password,
  });
};

export const CheckOauth = () => {
  return axios.post(`${API_URL}`, {
    method: "check_session",
    oauth: sessionStorage.getItem("sess_oauth"),
  });
};

export const SignUpWeb = ({ email, password, userName, password2 } = {}) => {
  return axios.post(`${API_URL}`, {
    method: "Register",
    userName: userName,
    password: password,
    password2: password2,
    email: email,
  });
};

// export const CreatBlog = ({ formdata } = {}) => {
//   return axios.post(`${API_URL}`, formdata, { FormHeaders });
// };
export const CreatBlog = ({ title, image, content, imageName } = {}) => {
  return axios.post(`${API_URL}`, {
    oauth: sessionStorage.getItem("sess_oauth"),
    method: "CreateBlog",
    title: title,
    image: image,
    content: content,
    imageName: imageName,
  });
};
