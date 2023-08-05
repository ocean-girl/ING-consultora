import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return (
      <div>
          <div><Navbar /></div>
  
          <div><Outlet /></div>
  
          <div><Footer /></div>
      
      
      </div>
    )
  }
export default Layout