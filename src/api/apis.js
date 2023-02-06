import axios from "axios";
import { API_URL } from "../constant";

export const SignInWeb = ({ email, password } = {}) => {
  return axios.post(`${API_URL}`, {
    method: "login",
    email: email,
    password: password,
  })
};

export const SignUpWeb = ({ email, password } = {}) => {
    return axios.post(`${API_URL}`, {
      method: "Register",
      userName: userName,
      password: password,
      password2:password2,
      email:email,
    })
  };