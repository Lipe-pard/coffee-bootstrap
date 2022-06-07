import './HeaderShop.css';
import Logo from '../Assets/Logo.svg'
import NavShop from './NavShop';
import { Navbar} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import * as eva from 'eva-icons'
import { useEffect } from 'react';

const HeaderShop = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    let navigate = useNavigate();

    return(
     <Navbar className='justify-content-around p-3 header mb-4'>
         <img src={Logo} alt="logo do site" className='logo' onClick={() => {navigate("/")} }/>        
         <NavLink to="/" className='d-flex mt-2 location p-0 mt-4'>
            <i data-eva="pin" data-eva-height="30" data-eva-width ="30"> </i>
             <div id="text-area">
                 <spam id="text-min"> Informe seu </spam>
                 <p> CEP </p>
             </div>
         </NavLink>
         <NavShop/>
         <div className='icons-menu d-flex'>
             <NavLink to="/login">
                <i data-eva="person-outline" data-eva-height="30" data-eva-width ="30"/>
             </NavLink>
             <NavLink to="/sacola">
                <i data-eva="shopping-bag-outline" data-eva-height="30" data-eva-width ="30"/>
             </NavLink>
        </div>
     </Navbar>
    )
}

export default HeaderShop