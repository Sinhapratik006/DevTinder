import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

const engine = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
export default engine;
