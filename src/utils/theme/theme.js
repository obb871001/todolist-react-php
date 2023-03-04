import { createMuiTheme } from "@mui/material/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#323232",
    },
    secondary: {
      main: "#9c27b0",
    },
    white: {
      main: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "#515151",
            opacity: 0.9, // 設置禁用狀態的透明度
          },
        },
      },
    },
  },
});

export default theme;
