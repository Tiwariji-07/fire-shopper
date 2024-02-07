import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Products from "../Pages/Admin/Products/Products";

const Routers = () => {
  return (
    <Routes>
      <Route path="/Admin" Component={Dashboard} />
      <Route path="/Admin/Products" Component={Products} />
    </Routes>
  );
};

export default Routers;
