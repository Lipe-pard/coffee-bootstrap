import './HeaderShop.css';
import Logo from '../Assets/Logo.svg'
import NavShop from './NavShop';
import { Navbar, Modal, Button} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import * as eva from 'eva-icons'
import { useEffect, useState } from 'react';
import MenuShop from './MenuShop';
import {useBag} from '../Providers/bagProvider'

const HeaderShop = () => {

    const {idItens} = useBag()
    const count = parseInt(idItens.length)

    useEffect(() => {
        eva.replace();
    }, []);

    let navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
              localStorage.removeItem('bagItens')
              navigate('/loja')
          }else{
              alert('erro ao realizar logout')
          }
        })
    }
  
    function iconsMenu(){
      if(!user){
        
        return(
          <>
            <MenuShop count={count}/>
          </>
        )

      }else{
        let person = user.email.substring(0, 1)
          return(
            <>
            
             <div className='icons-menu d-flex'>
                <NavLink to="/sacola">
                <div id="count"> {count} </div>
                <i data-eva="shopping-bag-outline" data-eva-height="30" data-eva-width ="30"/>
                </NavLink>
                <div id="person">
                <p> {person} </p>
                </div>
                <div id="logout" onClick={logout}>
                    <i data-eva="log-in-outline" data-eva-height="30" data-eva-width ="30"/>
                </div>
              </div>
            </>
          )

      }
    }



    return(
    <>
     <Navbar className='justify-content-around p-3 header mb-4'>
         <img src={Logo} alt="logo do site" className='logo' onClick={() => {navigate("/")} }/>        
         <div to="/" className='d-flex mt-2 location p-0 mt-4' onClick={handleShow}>
            <i data-eva="pin" data-eva-height="30" data-eva-width ="30"> </i>
             <div id="text-area">
                 <spam id="text-min"> Informe seu </spam>
                 <p> CEP </p>
             </div>
         </div>
         <NavShop/>
         {iconsMenu()}
     </Navbar>


     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h6 id="titleModal"> Informe o endereço onde quer receber os seus pedidos </h6>
          <div className="d-flex w-100">
            <Button id="consultaCep"> Consultar </Button>
            <input type="text" placeholder='CEP' id="inputCep"/>
          </div>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default HeaderShop