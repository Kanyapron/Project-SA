import { lazy } from "react";

import React from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";

import Home from "../page/Home/home"


const MainPages = Loadable(lazy(() => import("../page/Home/home")));

const Login = Loadable(lazy(() => import("../page/authentication/Login/Login")));

const Signup = Loadable(lazy(() => import("../page/authentication/Signup/Signup")));

const MainRoutes = (): RouteObject => {

  return {

    path: "/",

    element: <Home />,

    children: [

      {

        path: "/",

        element: <MainPages />,

      },

      {

        path: "/Login",

        element: <Login />,

      },

      {

        path: "/Signup",

        element: <Signup />,

      },

      {

        path: "*",

        element: <MainPages />,

      },

    ],

  };

};


export default MainRoutes;