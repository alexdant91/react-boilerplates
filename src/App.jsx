import { Routes, Route } from "react-router-dom";
import Default from "./components/layouts/default";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
