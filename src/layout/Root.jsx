import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


const Root = () => {
    return (
        <div className="mx-1 lg:mx-24">
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;