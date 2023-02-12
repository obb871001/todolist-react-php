import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Copyright({ color }) {
  return (
    <Typography
      variant="body2"
      color={color ? color : "text.secondary"}
      align="center"
    >
      {"Copyright © "}
      <Link to="/">iiwwpr1@gmail.com</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
