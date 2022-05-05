import './HeaderShop.css';
import Logo from '../Assets/Logo.svg'
import NavShop from './NavShop';
import { Navbar } from 'react-bootstrap'
import { IoIosPin } from "react-icons/io";
import {Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { HiOutlineHeart } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi"

const HeaderShop = () => {
    return(
     <Navbar className='justify-content-evenly pt-4 header navbar-dark '>
         <img src={Logo} alt="logo do site" className='logo'/>
         <Link to="/" className='d-flex m-0 location'>
             <IoIosPin className='icon'/>
             <div id="text-area">
                 <spam id="text-min"> Informe seu </spam>
                 <p> CEP </p>
             </div>
         </Link>
         <NavShop></NavShop>
         <div className='icons-menu'>
               <HiOutlineHeart/>
               <BiUser/>
               <HiOutlineShoppingBag/>
         </div>
     </Navbar>
    )
}

export default HeaderShop