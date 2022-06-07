import './ConfirmCep.css';
import {useEffect} from 'react'
import * as eva from 'eva-icons'
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton/>
        <Modal.Body className="p-5">
          <div className='d-flex'>
            <Button id="btnConsulta"> Consultar </Button>
            <input type="text" placeholder='Número do CEP' id="inputConsulta" maxLength={'10'}/>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

const ConfirmCep = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
          <p onClick={() => setModalShow(true)} className="linkConsulta">
           <i data-eva="pin" data-eva-height="30" data-eva-width ="30"> </i>
           <spam> Calcular valor do frete </spam>
          </p>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
    )
}

export default ConfirmCep