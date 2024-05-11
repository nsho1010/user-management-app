import { FC, memo,  } from "react";
import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router-dom";

export const HeaderLayout:FC = memo (() => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
})