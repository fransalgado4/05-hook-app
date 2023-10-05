import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <Link className="text-3xl font-bold leading-none" to="/">
        UseContext
      </Link>
      <ul className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "bg-black text-zinc-50" : "bg-zinc-50 text-black"}`
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "bg-black text-zinc-50" : "bg-zinc-50 text-black"}`
          }
          to={"about"}
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "bg-black text-zinc-50" : "bg-zinc-50 text-black"}`
          }
          to={"login"}
        >
          Login
        </NavLink>
      </ul>
    </nav>

    // <>
    //   <Link to="/">Home</Link>
    //   <Link to="about">About</Link>
    //   <Link to="login">Login</Link>
    // </>
  );
};
