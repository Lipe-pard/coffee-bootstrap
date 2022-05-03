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
         <Link to="/" className='d-flex m-0 location'>
             <IoIosPin className='icon'/>
             <div>
                 <label> Informe seu </label>
                 <p> CEP </p>
             </div>
         </Link>
         <NavShop/>
     </Navbar>
    )
}

export default HeaderShop