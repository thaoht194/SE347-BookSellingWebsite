import {
    Outlet
} from "react-router-dom";

import { Footer } from "../components/admin/footer";
import { Header } from "../components/admin/header";
import { AdminSide } from "../components/admin/sideBar";
export const AdminLayout = () => {
    return <>
        <Header />
        <div className="w-full h-[60px]"></div>
        <div className='flex w-full'>
            <div className='hidden lg:block'>
                <AdminSide />
            </div >
            <div className='flex-1 flex flex-col bg-[#F5F7FF] min-h-screen justify-between'>
                <Outlet></Outlet>
            </div>
        </div>

        <Footer />
    </>
}