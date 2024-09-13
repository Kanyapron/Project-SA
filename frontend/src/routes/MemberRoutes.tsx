import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";

import Profile from "../page/authentication/Member/Profile";
import LoginPage from "../page/authentication/Login/Login";



const MainPages = Loadable(lazy(() => import("../page/Home/home")));

const HomeLogin = Loadable(lazy(() => import("../page/HomeLogin/homelogin")));

const ProfileEdit = Loadable(lazy(() => import("../page/authentication/Member/edit/ProfileEdit")));


const MemberRoutes = (isLoggedIn: boolean): RouteObject[] => {
  return [
    {
      path: "/",
      element: isLoggedIn ? <HomeLogin /> : <MainPages />,
    },
    {
      path: "/HomeLogin",
      element: <HomeLogin />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/Profile/ProfileEdit/:id",
      element: <ProfileEdit />,
    },
  ];
};

export default MemberRoutes;