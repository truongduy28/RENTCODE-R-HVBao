import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./apply/RegisterPage";
import CheckStatus from "./checkStatus/CheckStatus";
import SuperAdminPage from "./superadmin/SuperAdminPage";

import "./App.css";
import HomePage from "./home/HomePage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/checkstatus" element={<CheckStatus />} />
      <Route path="/superadmin" element={<SuperAdminPage />} />
    </Routes>
  </Router>
);

export default App;
