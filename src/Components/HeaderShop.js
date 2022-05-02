import './HeaderShop.css';
import Logo from '../Assets/Logo.svg'
import NavShop from './NavShop';
import { Navbar } from 'react-bootstrap'
import { IoIosPin } from "react-icons/io";
import {Link } from 'react-router-dom'

const HeaderShop = () => {
    return(
     <Navbar className='justify-content-around pt-4 header navbar-dark'>
         <img src={Logo} alt="logo do site" className='logo'/>
         <div className='d-flex m-0 location'>
             <IoIosPin className='icon'/>
             <div>
                 <span> Informe seu </span>
                 <p> CEP </p>
             </div>
         </div>
         <NavShop/>
     </Navbar>
    )
}

export default HeaderShop