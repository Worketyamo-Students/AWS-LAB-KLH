import { Outlet } from "react-router-dom";
import Page from "./Page";

export default function Layout(){
    return(
        <div className="flex">
            <Page/>
            <Outlet/>
        </div>
    )
}