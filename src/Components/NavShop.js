import {Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavShop = () => {
    return(  
        <Nav>
        <NavDropdown id="nav-dropdown" title="Cafés">
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
      </Nav>
    )
}

export default NavShop