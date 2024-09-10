import { lazy } from "react";

import { RouteObject } from "react-router-dom";

import Loadable from "../components/third-patry/Loadable";



const Home = Loadable(lazy(() => import("../page/Home/home")));

const HomeLogin = Loadable(lazy(() => import("../page/HomeLogin/homelogin")));

const Profile = Loadable(lazy(() => import("../page/authentication/Member/Profile")));

const ProfileEdit = Loadable(lazy(() => import("../page/authentication/Member/edit/ProfileEdit")));


const AdminRoutes = (isLoggedIn : boolean): RouteObject => {

  return {

    path: "/",

    element: isLoggedIn ? <HomeLogin /> : <Home />,

    children: [

      {

        path: "/HomeLogin",

        element: <HomeLogin />,

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


export default AdminRoutes;