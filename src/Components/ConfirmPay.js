import './ConfirmPay.css';
import {Form, Button} from 'react-bootstrap'

const ConfirmPay = () => {

    return(
        <div id="cardConfirmPay" className="mx-auto">
          <h6> Informações do Pagamanto </h6>
          <div id="form">
            <p> Forma de Pagamento </p>
            <Form.Check
              type="radio"
              label="Cartão de Débito"
              name="formHorizontalRadios"
              id="debitoRadio"
            />
            <Form.Check
              type="radio"
              label="Cartão de Crédito"
              name="formHorizontalRadios"
              id="creditoRadio"
            />
            <p> Nome no Cartão </p>
            <input type="text" placeholder='Nome no Cartão' className='form-control'/>
            <p> Número no Cartão </p>
            <input type="text" placeholder='Número no Cartão' className='form-control'/>
            <div className='d-flex' id="Venc"> 
            <div className='itemForm'>
              <p> Vencimento </p>
              <input type="date" placeholder='Nome no Cartão' className='form-control' id="dateForm"/>
            </div>
            <div className='itemForm'>
              <p> CVV </p>
              <input type="text" placeholder='CVV' className='form-control'/>
            </div>
            </div>
            <div className='w-100 text-center mt-4'>
            <Button className='mx-auto p-3' id="contCompra"> Continuar Compra </Button>
            </div>
          </div>
        </div>
    )
}

export default ConfirmPay