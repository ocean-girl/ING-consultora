import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
//import Home from "../pages/Home";
import { Outlet } from "react-router-dom";
//import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
export default Layout;
