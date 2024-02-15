import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/landingPage/LandingPage";
import Home from "./Components/home/Homepage";
import User from "./Components/user/User";

const App = () => {
  return (
    <div
      className="bg-sky-800 w-full h-full min-h-screen
    "
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
