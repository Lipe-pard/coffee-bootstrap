import './HeaderAdmin.css';
import {Navbar} from 'react-bootstrap'
import Logo from '../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import {Button} from 'react-bootstrap'

const HeaderAdmin = () => {

    let navigate = useNavigate()

    return(
        <>
         <Navbar className="header d-flex justify-content-around p-3 ">
            <img src={Logo} alt="logo do site" className='logo' onClick={() => {navigate("/")} }/> 
            <div id="search">
                <SearchBar/>
            </div>
            <Button id="btnLogout"> Sair </Button>
         </Navbar>
        </>
    )
}

export default HeaderAdmin