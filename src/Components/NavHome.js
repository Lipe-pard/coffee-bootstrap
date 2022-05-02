import './NavHome.css';
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavHome = () => {
    return(
     <>
     <nav>
         <Nav className='justify-content-center'>
           <Nav.Item>
               <Nav.Link> 
                 <Link to="/"> Home </Link>    
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link> 
                 <Link to="/loja"> Loja </Link>    
               </Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link> 
                 <Link to="/contatos"> Contatos </Link>    
               </Nav.Link>
           </Nav.Item>
         </Nav>
     </nav>
     </>
    );
}

export default NavHome