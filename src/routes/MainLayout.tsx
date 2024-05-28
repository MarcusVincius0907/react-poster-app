import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function MainLayout(){
    return (
        <div className="m-auto max-w-screen-xl">
            <MainHeader />
            <Outlet />
        </div>
    )
}