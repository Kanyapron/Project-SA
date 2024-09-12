import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConfigRoutes from "./routes";

import "./App.css";
import ProfileEdit from "./page/authentication/Member/edit/ProfileEdit";
import Profile from "./page/authentication/Member/Profile";
import HomePage from "./page/Home/home";


const App: React.FC = () => {

  return (

    <Router>

      <Route path="/" element={<Dashboard />} />

      <Route path="/" element={<HomePage/>}/>

    </Router>

  );

};


export default App;