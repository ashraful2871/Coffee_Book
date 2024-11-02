import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <div>
        <div className="h-16">
          <Toaster></Toaster>
          <NavBar></NavBar>
        </div>
        <div className="min-h-[calc(100vh-290px)] py-12 container mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
