import * as eva from 'eva-icons'
import { useEffect } from 'react'
import {NavLink} from 'react-router-dom'

const MenuShop = (props) => {

    useEffect(() => {
        eva.replace();
    }, []);

    return(
        <>
            <div className='icons-menu d-flex'>
              <NavLink to="/login">
                  <i data-eva="person-outline" data-eva-height="30" data-eva-width ="30"/>
              </NavLink>
              <NavLink to="/sacola">
                  <div id="count"> {props.count} </div>
                  <i data-eva="shopping-bag-outline" data-eva-height="30" data-eva-width ="30"/>
              </NavLink>
            </div>
        </>
    )
}

export default MenuShop