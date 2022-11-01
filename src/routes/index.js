import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Registration from "../pages/Registration";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Registration />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
