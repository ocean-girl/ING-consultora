import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "../pages/Home";
//import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Home />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
