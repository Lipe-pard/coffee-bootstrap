import './HeaderShop.css';
import Logo from '../Assets/Logo.svg'
import NavShop from './NavShop';
import { Navbar} from 'react-bootstrap'
import { IoIosPin } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom'
import * as eva from 'eva-icons'
import { useEffect } from 'react';

const HeaderShop = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    let navigate = useNavigate();

    return(
     <Navbar className='justify-content-around p-3 header'>
         <img src={Logo} alt="logo do site" className='logo' onClick={() => {navigate("/")} }/>        
         <NavLink to="/" className='d-flex mt-2 location p-0 mt-4'>
             <IoIosPin className='icon'/>
             <div id="text-area">
                 <spam id="text-min"> Informe seu </spam>
                 <p> CEP </p>
             </div>
         </NavLink>
         <NavShop/>
         <div className='icons-menu d-flex'>
             <NavLink to="/">
                <i data-eva="person-outline" data-eva-height="30" data-eva-width ="30" data-eva-fill="#FFF"> </i>
             </NavLink>
             <NavLink to="/">
                <i data-eva="heart-outline" data-eva-height="30" data-eva-width ="30" data-eva-fill="#FFF"> </i>
             </NavLink>
             <NavLink to="/">
                <i data-eva="shopping-bag-outline" data-eva-height="30" data-eva-width ="30" data-eva-fill="#FFF"> </i>
             </NavLink>
        </div>
     </Navbar>
    )
}

export default HeaderShop