import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16 print:pt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

