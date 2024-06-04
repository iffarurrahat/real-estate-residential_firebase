import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2 className="text-2xl bg-red-400">Header</h2>
      <Outlet />
    </div>
  );
};

export default MainLayout;
