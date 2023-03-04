import { SnackbarProvider } from "notistack";
import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme/theme";
import "./App.css";
import "./css/main.css";
import Wrapper from "./components/Wrapper/Wrapper";
import { routes } from "./utils/routes/routes";
import { CheckOauth } from "./api/apis";
import { useDispatch } from "react-redux";
import { StoreBlogList, StoreInfo } from "./redux/action/ACTION";
import StartBackground from "./components/StarBackground/StarBackground";
import { GETblogList } from "./api/GETapis";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    CheckOauth()
      .then((res) => {
        const obj = res.data;
        const OK = obj.code === "Ok";
        if (OK) {
          dispatch(StoreInfo(obj));
        } else {
          sessionStorage.removeItem("sess_oauth");
        }
      })
      .catch((error) => console.log(error));
    GETblogList()
      .then((res) => {
        dispatch(StoreBlogList(res.data.blog_list));
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider zIndex={999999}>
        {/* <StartBackground /> */}
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              console.log(route);
              return (
                <Route
                  path={route.path}
                  element={
                    route.path === "/signin" || route.path === "/signup" ? (
                      route.element
                    ) : (
                      <Wrapper>{route.element}</Wrapper>
                    )
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
