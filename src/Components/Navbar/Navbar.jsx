import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const Navbar = (
    <>
      <NavLink
        className=" bg-slate-100 hover:bg-slate-300 text-lg font-semibold mr-2 rounded px-2 py-1"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="bg-slate-100 hover:bg-slate-300 text-lg font-semibold mr-2 rounded px-2 py-1"
        to="/signin"
      >
        Login
      </NavLink>
      <NavLink
        className="bg-slate-100 hover:bg-slate-300 text-lg font-semibold mr-2 rounded px-2 py-1"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="bg-slate-100 hover:bg-slate-300 text-lg font-semibold mr-2 rounded px-2 py-1"
        to="/orders"
      >
        Orders
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Navbar}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">
          <p>
            <span className=" text-cyan-600">P</span>rogramming{" "}
            <span className=" text-rose-600">C</span>amp
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navbar}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button onClick={logOut} className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/signin">
            <button className="btn btn-sm btn-ghost">LogIn</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
