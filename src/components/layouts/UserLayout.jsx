import { Outlet } from "react-router-dom";
import UserNavbar from "../shared/UserNavbar";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
    </>
  );
};

export default UserLayout;