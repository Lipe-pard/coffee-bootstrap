import './LayoutLogin.css';
import Overlay from "../../Components/Overlay"
import { Outlet } from 'react-router-dom'

const LayoutLogin = () => {
    return(
        <>
            <div className="bg">
              <Overlay />
              <Outlet/>
            </div>
        </>
    )
}

export default LayoutLogin