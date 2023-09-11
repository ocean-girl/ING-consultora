import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const navigate = useNavigate();

  return <Navbar navigate={navigate} />;
};

export default NavbarContainer;
