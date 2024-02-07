import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./App.scss";

import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import { db } from "../firebase.config";
import {
  addIncome,
  deleteIncome,
  getAllIncome,
  updateIncome,
} from "../api/income";
import { addExpense } from "../api/expense";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import Products from "./Pages/Admin/Products/Products";
import AdminSidebar from "./components/sidebar/AdminSidebar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      {/* <button onClick={() => addExpense(344, "online")}>Add</button>
      <button onClick={() => getAllIncome()}>get</button>
      <button onClick={() => updateIncome("clJZMzbi4cRABifQbFvs", 999, "cash")}>
        Update
      </button>
      <button onClick={() => deleteIncome("QLchuVp16BHw7IFXtKI9")}>
        Delete
      </button> */}
      {/* <Layout />
       */}
      {/* <Routers /> */}

      <Routes>
        <Route path="/Admin" Component={AdminSidebar}>
          <Route index Component={Dashboard} />
          <Route path="Products" Component={Products} />
        </Route>
        <Route path="/Login" Component={Login} />
        <Route path="/Signup" Component={Signup} />
      </Routes>
      {/* <Profile /> */}
    </>
  );
}

export default App;
