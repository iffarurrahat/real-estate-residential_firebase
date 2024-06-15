import logo from "./../../assets/logo.png";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Drawer from "./Drawer";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const [open, setOpen] = useState(false);

  // New state for drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        setDrawerOpen(false); // Close drawer on logout
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

  // Conditional rendering of login
  if (!user) {
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

              {user && (
                <div className="">
                  <img
                    src={user?.photoURL}
                    className="border-2 border-primary cursor-pointer w-10 h-10 rounded-full p-[2px]"
                    onClick={() => setDrawerOpen(true)} // Set drawerOpen to true on click
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      </Container>

      {/* Add Drawer component */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={user}
        handleSignOut={handleSignOut} // Pass handleSignOut to Drawer
      />
    </div>
  );
};

export default Navbar;
