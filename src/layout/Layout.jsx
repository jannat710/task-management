import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";


const Layout = () => {
    return (
        <div className="w-screen h-screen relative">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;