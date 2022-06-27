import './HeaderAdmin.css';
import {Navbar} from 'react-bootstrap'
import Logo from '../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import {Button} from 'react-bootstrap'

const HeaderAdmin = () => {

    let navigate = useNavigate()

    let dadosUser = window.localStorage.getItem('userLogged')
    let user = JSON.parse(dadosUser)

    const logout = () => {
        const formData = new FormData();
        formData.append('token', user.token)
        fetch(
          "http://localhost/Api_CoffeeSun/api/auth/logout",
          {method: 'POST', body: formData}
          )
          .then(async (response) => {
            if(response.status === 200){
                localStorage.removeItem('userLogged')
                navigate('/loja')
            }else{
                alert('erro ao realizar logout')
            }
          })
      }

    return(
        <>
         <Navbar className="header d-flex justify-content-around p-3 ">
            <img src={Logo} alt="logo do site" className='logo' onClick={() => {navigate("/")} }/> 
            <div id="search">
                <SearchBar/>
            </div>
            <Button id="btnLogout" onClick={logout}> Sair </Button>
         </Navbar>
        </>
    )
}

export default HeaderAdmin