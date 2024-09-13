import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConfigRoutes from "./routes";

import "./App.css";
import ProfileEdit from "./page/authentication/Member/edit/ProfileEdit";
import Profile from "./page/authentication/Member/Profile";
import HomePage from "./page/Home/home";
import LoginPage from "./page/authentication/Login/Login";
import SignUpPages from "./page/authentication/Signup/Signup";
import HomeLogin from "./page/HomeLogin/homelogin";


const App: React.FC = () => {

  return (

    <Router>
      <ConfigRoutes/>
      {/* <Profile/> */}
    </Router>

  );

};


export default App;