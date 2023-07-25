import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Error from "./Components/Error";

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Register />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
