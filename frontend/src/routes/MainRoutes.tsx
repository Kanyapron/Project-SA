import { lazy } from "react";

import React from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";

const MainPages = Loadable(lazy(() => import("../page/Home/home")));

const LoginPage = Loadable(lazy(() => import("../page/authentication/Login/Login")));

const SignupPage = Loadable(lazy(() => import("../page/authentication/Signup/Signup")));

const MainRoutes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <MainPages />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/SignupPage",
      element: <SignupPage />,
    },
    {
      path: "*",
      element: <MainPages />,
    },
  ];
};


export default MainRoutes;