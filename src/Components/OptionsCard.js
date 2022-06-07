import './OptionsBtn.css';
import {Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import * as eva from 'eva-icons'
import {Modal} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const OptionsCard = ({handleTrashClick, products}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
  
    useEffect(() => {
        eva.replace();
      }, []); 

    return(
     <div className='d-flex w-100 justify-content-center mbq-3'>
         <Button className="m-2 btn-danger" id='btn-delete' onClick={handleShow}>
            <i data-eva="trash" data-eva-height="30" data-eva-width ="30"> </i>
        </Button>
        <Button className="m-2" id="btn-edit" onClick={()=> navigate('editar-produto/'+products.id)}>
            <i data-eva="edit" data-eva-height="30" data-eva-width ="30"> </i>
        </Button>
        <Button className="m-2 btn-info" id="btn-view">
            <i data-eva="eye" data-eva-height="30" data-eva-width ="30"> </i>
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <h5 className="text-start"> Deseja realmente deletar esse produto ? </h5>
            <spam id="obsDelete"> Obs: uma vez deletado o produto não estara mais presente em seu site. </spam>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {handleTrashClick(products.id)}}>
            Confirmar
          </Button>
          <Button onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
    )
}

export default OptionsCard