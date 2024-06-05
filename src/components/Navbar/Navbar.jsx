import { useEffect, useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import Container from "../ui/Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("");
  const location = useLocation();
  useEffect(() => {
    // Update background color based on the current route
    if (location.pathname === "/") {
      setNavbarBackgroundColor("text-white");
    } else {
      setNavbarBackgroundColor("shadow");
    }
  }, [location.pathname]);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 1, path: "/properties", name: "Properties" },
    { id: 2, path: "/login", name: "Login" },
    { id: 3, path: "/register", name: "Register" },
  ];

  return (
    <div
      className={`${navbarBackgroundColor} font-roboto text-xs font-semibold absolute top-0 left-0 right-0 z-50`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="text-3xl font-3xl text-white">NavBar</h1>
          <div>
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
              {open ? <RiCloseLine /> : <RiMenu2Line />}
            </div>
            <ul
              className={`md:flex items-center gap-14 absolute md:static duration-1000 mr-4 md:mr-0 right-0 px-8 md:px-0 py-4 rounded-lg ${
                open
                  ? "top-20 shadow-lg bg-white text-black md:shadow-transparent md:bg-transparent md:text-white space-y-3 md:space-y-0"
                  : "-top-60"
              }`}
            >
              {routes.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive ? "bg-primary text-white px-3 py-1 rounded" : ""
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
