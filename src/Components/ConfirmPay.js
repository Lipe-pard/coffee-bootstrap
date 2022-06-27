import './ConfirmPay.css';
import {Button} from 'react-bootstrap'
import {useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

const ConfirmPay = () => {

    const payFormatRef = useRef()
    const nameCardRef = useRef()
    const numberCardRef = useRef()
    const dateCardRef = useRef()
    const cvvCardRef = useRef() 

    let navigate = useNavigate()

    function handleSubmit(event){
      event.preventDefault()
      let formatPay = event.target[0].value
      let name = event.target[1].value
      let number = event.target[2].value
      let date = event.target[3].value
      let cvv = event.target[4].value

      let dados = [formatPay, name, number, date, cvv]

      localStorage.setItem('user', JSON.stringify(dados));

      let dadoCep = localStorage.getItem("cepUser")
      let cepUser = JSON.parse(dadoCep)

      if(!cepUser){
        navigate('informe-cep')
      }
    }

    return(
        <div id="cardConfirmPay" className="mx-auto">
          <h6> Informações do Pagamanto </h6>
          <form id="form" onSubmit={(event) => handleSubmit(event)}>
            <p> Forma de Pagamento </p>
            <select className="form-select" id="formSelect" ref={payFormatRef}>
              <option value="Cartão de Crédito"> Cartão de Crédito </option>
              <option velue="Cartão de Débito"> Cartão de Débito </option>
            </select>
            <p> Nome no Cartão </p>
            <input type="text" placeholder='Nome no Cartão'  className='form-control' name="nameCard" ref={nameCardRef}/>
            <p> Número no Cartão </p>
            <input type="text" placeholder='Número no Cartão' maxLength={16} className='form-control' name="numberCard" ref={numberCardRef}/>
            <div className='d-flex' id="Venc"> 
            <div className='itemForm'>
              <p> Vencimento </p>
              <input type="month" placeholder='Nome no Cartão' className='form-control' id="dateForm" name="dateCard" ref={dateCardRef}/>
            </div>
            <div className='itemForm'>
              <p> CVV </p>
              <input type="text" placeholder='CVV' className='form-control' name="cvvCard" ref={cvvCardRef}/>
            </div>
            </div>
            <div className='w-100 text-center mt-4'>
            <Button type="submit" className='mx-auto p-3' id="contCompra"> Continuar Compra </Button>
            </div>
          </form>
        </div>
    )
}

export default ConfirmPay