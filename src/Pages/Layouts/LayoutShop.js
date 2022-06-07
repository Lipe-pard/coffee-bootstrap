import './LayoutShop.css';
import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import HeaderShop from "../../Components/HeaderShop"

const LayoutShop = () => {
 return(
    <>
     <HeaderShop />
     <Outlet />
     <Footer/>
    </>
 )
}

export default LayoutShop