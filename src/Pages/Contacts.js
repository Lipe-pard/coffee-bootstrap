import './Contacts.css'
import {useNavigate} from 'react-router-dom'
import Logo from '../Assets/Logo.svg'
import * as eva from 'eva-icons'
import { useEffect } from 'react'
import {Button} from 'react-bootstrap'

const Contacts = () => {
  useEffect(() => {
    eva.replace();
  }, []);

  let navigate = useNavigate();
    return(
        <>
         <div className='d-flex'>
          <div id="black">
            <img src={Logo} alt="Logo do sistema" id='logo' onClick={() => (navigate('/'))}/>
            <div className='m-5'>
              <h1 id='titlepage'> Contatos </h1>

              <div className="d-flex itensContact p-2">
                <div className='bg-icon'>
                  <i data-eva="phone" data-eva-height="30" data-eva-width ="30"/>
                </div>
                <p>(+55) 12 9986 6579</p>
              </div>

              <div className="d-flex itensContact p-2">
                <div className='bg-icon'>
                  <i data-eva="google" data-eva-height="30" data-eva-width ="30"/>
                </div>
                <p>CoffeeSun@gmail.com</p>
              </div>

              <div className='d-flex itensContact p-2'>
                <div className='bg-icon'>
                  <i data-eva="facebook" data-eva-height="30" data-eva-width ="30"/>
                </div>
                <p>CoffeSun.Oficial</p>
              </div>

            </div>
          </div>
          <div id="ligth">
            <div className='d-flex' id="formComent">
              <form className='mx-auto w-75 text-center'>
                <input type="text" className="inputsContacts form-control" placeholder='Nome'/>
                <input type="email" className="inputsContacts form-control" placeholder='Email'/>
                <textarea placeholder='Comentario' id="coments" className='inputsContacts'></textarea>
                <Button id="envComent"> Enviar </Button>
              </form>
            </div>
          </div>
         </div>
        </>
    )
}

export default Contacts