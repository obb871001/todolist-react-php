import { Snackbar } from "@mui/material";

export const AlertError = (content) => {
  return <Snackbar message={content}></Snackbar>;
};
