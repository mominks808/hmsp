import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import { FrontDesk } from "./components/FrontDesk";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { NavBar } from "./components/NavBar";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <h1>HMSP</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/frontdesk" element={<FrontDesk />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
