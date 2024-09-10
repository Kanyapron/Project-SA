import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./page/Component_home/Navbar"
import Home from "./page/Home/home"; // นำเข้าคอมโพเนนต์ Test
import LoginPage from "./page/authentication/Login/Login";
import SignupPage from "./page/authentication/Signup/Signup";
import HomePage from "./page/Home/home";
import ProfileEdit from "./page/authentication/Member/edit/ProfileEdit";
import ProfileEditTest from "./page/authentication/Member/edit/ProfileEdit";
import ConfigRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>

    </Router>
  );
};

export default App;
