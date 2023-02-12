import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const GetGitHub = () => {
  return axios.get("https://api.github.com/users/obb871001/repos", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
};
