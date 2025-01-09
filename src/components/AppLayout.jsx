import { Outlet } from "react-router-dom";
import AppNavList from "./AppNavList";
//importare FOOTER-HEADER per averli in tutte le rotte comprese da questo layout

export default function AppLayout() {
    return (
        <>
            <AppNavList />
            <Outlet />
        </>
    )
}