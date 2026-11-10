import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

// Hide the resume switcher navbar in the deployed (production) build so the
// shared link shows only the resume; keep it in local dev for navigation.
const showNav = !import.meta.env.PROD;

export const Layout = () => {
  return (
    <div className="min-h-screen">
      {showNav && <NavBar />}
      <main className={`${showNav ? "pt-16" : "pt-0"} print:pt-0`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
