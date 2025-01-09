import { Outlet } from "react-router-dom";
//importare FOOTER-HEADER per averli in tutte le rotte comprese da questo layout

export default function AppLayout() {
    return (
        <div>
            <span>Sono Prima di Outlet</span>
            <Outlet />
        </div>
    )
}