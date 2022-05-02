import './HeaderHome.css';
import NavHome from "./NavHome"
import {Navbar, Button} from 'react-bootstrap'
import Logo from '../Assets/Logo.svg'
import { BiUser } from "react-icons/bi";

const HeaderHome = () => {
    return(
        <Navbar className='justify-content-around pt-4'>
            <img src={Logo} alt="logo do site" className='logo'/>
            <NavHome />
            <Button className='btn-user p-2 border-0'> 
              <BiUser />
            </Button>
        </Navbar>
    )
}

export default HeaderHome