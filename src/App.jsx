import { Routes } from "react-router-dom";
import Default from "./components/layouts/default";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
