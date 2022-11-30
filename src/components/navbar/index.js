import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = ({ isAuthenticate }) => {
  return (
    <nav
      className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  border-b
  border-gray-300
  navbar navbar-expand-lg navbar-light
  "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="flex-grow items-center" id="navbarSupportedContent">
          <a
            className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
            href="/"
          >
            <img src={logo} className="h-[25px]" alt="logo" loading="lazy" />
            <h4 className="text-xl text-black ml-3">Todo</h4>
          </a>
        </div>
        <div className="flex items-center relative">
          {isAuthenticate ? (
            <div className="dropdown relative">
              <button
                className="dropdown-toggle flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-full h-[25px] w-[25px]"
                  alt=""
                  loading="lazy"
                />
              </button>

              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-5  m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className="dropdown-item text-sm py-2 px-4 block text-center whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 w-28 font-semibold"
                    href="/"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex space-x-2 justify-center">
              <NavLink
                to={"/signup"}
                className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-sm leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Sign up
              </NavLink>
              <NavLink
                to={"/signin"}
                className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Sign in
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
