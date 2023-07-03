import { Routes, Route, Navigate } from "react-router-dom";
import Default from "./components/layouts/Default";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import UserLayout from "./components/layouts/UserLayout";
import Profile from "./pages/users/Profile";
import Cart from "./pages/Cart";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  if (token == null) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
