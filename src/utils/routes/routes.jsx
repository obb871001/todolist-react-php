import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

export const routes = [
  { path: "/home", element: <Home />, isNav: true },
  { path: "/signin", element: <SignIn />, isNav: false },
  { path: "/signup", element: <SignUp />, isNav: false },
];
