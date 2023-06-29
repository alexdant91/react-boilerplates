import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Default = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Default;
