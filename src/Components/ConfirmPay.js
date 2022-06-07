import './ConfirmPay.css';
import {Form} from 'react-bootstrap'

const ConfirmPay = () => {

    function check(id){
       if(id === "credito"){
           document.querySelector('#debito').checked = false
       }
       else if(id === "debito"){
        document.querySelector('#credito').checked = false
    }
    }

    return(
        <div id="cardConfirmPay" className="mx-auto">
          <h6> Informações do Pagamanto </h6>
          <div id="form">
            <p> Forma de Pagamento </p>
            <Form.Check
            aria-label="option 1"
            label="Cartão de Crédito"
            className="check"
            id="debito"
            onClick={() => check(this.id)}
            />
            <Form.Check
            aria-label="option 1"
            label="Cartão de Débito"
            className="check"
            id="credito"
            onClick={() => check(this.id)}
            />
          </div>
        </div>
    )
}

export default ConfirmPay