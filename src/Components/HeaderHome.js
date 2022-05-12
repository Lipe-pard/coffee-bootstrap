import './HeaderHome.css';
import NavHome from "./NavHome"
import {Navbar, Button} from 'react-bootstrap'
import Logo from '../Assets/Logo.svg'
import * as eva from 'eva-icons'
import { useEffect } from 'react';

const HeaderHome = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    return(
        <Navbar className='justify-content-around pt-4'>
            <img src={Logo} alt="logo do site" className='logo'/>
            <NavHome />
            <Button className='btn-user p-2 border-0'> 
            <i data-eva="person-outline" data-eva-height="30" data-eva-width ="30" data-eva-fill="#FFF"> </i>
            </Button>
        </Navbar>
    )
}

export default HeaderHome