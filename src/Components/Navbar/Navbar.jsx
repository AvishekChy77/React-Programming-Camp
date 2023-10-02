import { NavLink } from "react-router-dom";

const Navbar = () => {
  //   const handleLogOut = () => {

  //   };

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
        to="/login"
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
        <a className="btn btn-ghost normal-case text-xl">Phoneix</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navbar}</ul>
      </div>
      <div className="navbar-end">
        {/* {user ? (
          <>
            <span>{user.email}</span>
            <a onClick={handleLogOut} className="btn btn-sm">
              Sign out
            </a>
          </>
        ) : (
          <NavLink className="btn btn-sm" to="/login">
            Log In
          </NavLink>
        )} */}
        <button className="btn btn-sm">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
