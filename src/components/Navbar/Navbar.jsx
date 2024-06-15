import logo from "./../../assets/logo.png";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("");
  const location = useLocation();
  useEffect(() => {
    // Update background color based on the current route
    if (location.pathname === "/") {
      setNavbarBackgroundColor("md:text-white");
    } else {
      setNavbarBackgroundColor("shadow");
    }
  }, [location.pathname]);

  // logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        if (error.message) {
          toast.error("Something wrong");
        }
      });
  };

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/register", name: "Register" },
  ];

  // Conditional rendering of login/logout
  if (user) {
    routes.push({ id: 4, path: "#", name: "Logout", onClick: handleSignOut });
  } else {
    routes.push({ id: 3, path: "/login", name: "Login" });
  }

  return (
    <div
      className={`${navbarBackgroundColor} font-roboto text-xs font-semibold absolute top-0 left-0 right-0 z-50`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <img src={logo} alt="logo" />
          <div>
            <div
              className="md:hidden text-3xl text-primary"
              onClick={() => setOpen(!open)}
            >
              {open ? <RiCloseLine /> : <RiMenu2Line />}
            </div>
            <ul
              className={`md:flex items-center gap-14 absolute md:static duration-1000 mr-4 md:mr-0 right-0 px-8 md:px-0 py-4 rounded-lg ${
                open
                  ? "top-20 shadow-lg md:shadow-transparent bg-white md:bg-transparent space-y-3 md:space-y-0"
                  : "-top-60"
              }`}
            >
              {routes.map((route) => (
                <li key={route.id} className="">
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive && route.name !== "Logout"
                        ? "bg-primary text-white px-3 py-1 rounded"
                        : ""
                    }
                    onClick={route.onClick ? route.onClick : null}
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
