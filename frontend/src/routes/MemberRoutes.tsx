import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";



const MainPages = Loadable(lazy(() => import("../page/authentication/Login/Login")));

const HomeLogin = Loadable(lazy(() => import("../page/HomeLogin/homelogin")));

const Profile = Loadable(lazy(() => import("../page/authentication/Member/Profile")));

const ProfileEdit = Loadable(lazy(() => import("../page/authentication/Member/edit/ProfileEdit")));


const MemberRoutes = (isLoggedIn : boolean): RouteObject => {

  return {

    path: "/Login",

    element: isLoggedIn ? <HomeLogin /> : <MainPages />,

    children: [

      {

        path: "/",

        element: <Profile />,

      },

      {

        path: "/Profile",

        children: [

          {

            path: "/Profile",

            element: < Profile/>,

          },

          {

            path: "/Profile/ProfileEdit/:id",

            element: <ProfileEdit />,

          },

        ],

      },

    ],

  };

};


export default MemberRoutes;