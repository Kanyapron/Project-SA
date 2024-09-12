import { lazy } from "react";

import React from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";

import HomePage from "../page/Home/home"


const MainPages = Loadable(lazy(() => import("../page/authentication/Login/Login")));

const SignupPage = Loadable(lazy(() => import("../page/authentication/Signup/Signup")));

const MainRoutes = (): RouteObject => {

  return {

    path: "/",

    element: <HomePage />,

    children: [

      {

        path: "/",

        element: <MainPages />,

      },

      {

        path: "/Signup",

        element: <SignupPage />,

      },

      {

        path: "*",

        element: <MainPages />,

      },

    ],
    
  };

};


export default MainRoutes;