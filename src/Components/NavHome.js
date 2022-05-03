import './NavHome.css';
import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const NavHome = () => {
    return(
     <>
     <nav>
         <Nav className='justify-content-center'>
           <Nav.Item>
               <Nav.Link> 
                 <NavLink to="/"> Home </NavLink>    
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link> 
                 <NavLink to="/loja"> Loja </NavLink>    
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link> 
                 <NavLink to="/contatos"> Contatos </NavLink>    
               </Nav.Link>
           </Nav.Item>
         </Nav>
     </nav>
     </>
    );
}

export default NavHome