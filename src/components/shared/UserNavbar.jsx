import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";


const UserNavbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [open, setOpen] = useState(false);
  
  const handleLogout = () => {
    dispatch(logout()) 
    navigate("/login");
  }

  return (
    <>
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div
              className="flex flex-row items-center justi
      fy-between p-4"
            >
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Dashboard
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen((_open) => !_open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={[
                open ? "flex" : "hidden",
                "flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row",
              ].join(" ")}
            >
              <Link
                className={[
                  "px-4 py-2 mt-2 text-sm font-semibold rounded-lg  dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                  location.pathname == "/" ? "bg-gray-200" : "",
                ].join(" ")}
                to="/"
              >
                Home
              </Link>
              {
                user ? 
                <button
                onClick={handleLogout}
                className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
                :
                <Link
                className={[
                  "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                  location.pathname == "/login" ? "bg-gray-200" : "",
                ].join(" ")}
                to="/login"
              >
                Login
              </Link>
              }
              
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
