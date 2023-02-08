import { SnackbarProvider } from "notistack";
import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./css/main.css";
import Wrapper from "./components/Wrapper/Wrapper";
import { routes } from "./utils/routes/routes";

function App() {
  return (
    <Fragment>
      <SnackbarProvider>
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
    </Fragment>
  );
}

export default App;
