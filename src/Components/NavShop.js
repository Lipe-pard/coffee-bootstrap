import './NavShop.css';
import {Nav, NavDropdown} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

const NavShop = () => {
    return(  
        <Nav id="nav">
                <NavDropdown className="drop" menuVariant="dark" id="nav-dropdown-dark-example"title="Cafés">
                <NavDropdown.Item>
                    <NavLink to="/shop"> Grão </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/shop"> Moídos </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/shop"> Cápsulas </NavLink>
                </NavDropdown.Item>
                </NavDropdown>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/"> Acessorios </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/"> Ofertas do dia </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/"> Promoções </Link>
                </Nav.Link>
            </Nav.Item>
      </Nav>
    )
}

export default NavShop