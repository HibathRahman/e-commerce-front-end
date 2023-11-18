import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layout/authLayout";
import AdminRoutes from "./routes/adminRoutes";
import AddProduct from "./admin/AddProducts";
import UserRoutes from "./routes/userRoutes";
import PublicRoutes from "./routes/publicRoutes";

function App() {
  const userData = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes user={userData}>
              <SignUp />
            </PublicRoutes>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRoutes user={userData}>
              <Login />
            </PublicRoutes>
          }
        ></Route>

        <Route path="/auth" element={<AuthLayout />}></Route>
        <Route
          path="/home"
          element={
            <UserRoutes user={userData}>
              <Home />
            </UserRoutes>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminRoutes user={userData}>
              <AddProduct />
            </AdminRoutes>
          }
        ></Route>
        <Route path="*" element={<Navigate replace to="/login" />}></Route>
      </Routes>
    </>
  );
}

export default App;
