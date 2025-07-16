import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout(){
    const location = useLocation()
    
    return <div className="min-h-screen bg-white">
        <Navbar/>

        {/* This will render the children components */}
        <Outlet key={location.pathname}/>

    </div>
}