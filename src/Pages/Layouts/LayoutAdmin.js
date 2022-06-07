import './LayoutAdmin.css';
import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import HeaderAdmin from "../../Components/HeaderAdmin"

const LayoutAdmin = () => {
    return(
        <>
        <HeaderAdmin/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default LayoutAdmin