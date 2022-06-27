import './FormAddProduct.css';
import { Button } from 'react-bootstrap'
import {useEffect, useRef} from 'react'
import * as eva from 'eva-icons'
import { useNavigate } from 'react-router-dom';

const FormAddProduct = ({products, setProducts}) => {
    
    useEffect(() => {
        eva.replace();
      }, []);

    let dadosUser = window.localStorage.getItem('userLogged')
    let user = JSON.parse(dadosUser)

     let navigate = useNavigate();

      const nameRef = useRef();
      const discrRef = useRef();
      const valueRef = useRef();
      const amountRef = useRef();
      const typeRef = useRef();
      const eventRef = useRef();
      const colorRef = useRef();
      const imageRef = useRef();

      useEffect(() => {
        imageRef.current.focus();
      })
    
      const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('image', event.target[0].value);
        formData.append('name', event.target[1].value);
        formData.append('discription', event.target[2].value);
        formData.append('value', event.target[3].value);
        formData.append('amount', event.target[4].value);
        formData.append('event', event.target[5].value);
        formData.append('type', event.target[6].value);
        formData.append('color', event.target[7].value);

        fetch(
          "http://localhost/Api_CoffeeSun/api/product/create",
          {
            method: 'POST',
            body: formData,  
            headers: {
              "Access-Token": user.token
            }
          }
          )
          .then((response) => response.json())
          .then((data) => {
            nameRef.current.value = ''
            discrRef.current.value = ''
            valueRef.current.value = ''
            amountRef.current.value = ''
            eventRef.current.value = ''
            typeRef.current.value = ''
            colorRef.current.value = ''
            imageRef.current.value = ''
            navigate('/admin')
            alert(data.Mensage)
            setProducts([ data.product, ...products])
          });
      } 
  

    return(
 
        <form className='mx-auto text-center' onSubmit={(event) => handleSubmit(event)} id="formAddProduct">
         <div className='w-100'>
             <input className='form-control mb-2' name="image" ref={imageRef} placeholder="imagem"/>
            <input className='form-control' name="name" ref={nameRef} placeholder="Nome"/>
            <textarea className='form-control' name="discription" ref={discrRef} placeholder="discrição"/>
            <div className='d-flex w-100 flex-row-reverse'>
                <div className='p-2 w-100'>
                    <div className='d-flex justify-content-center' id="group-inputs">
                        <input className='form-control' name="value" ref={valueRef} placeholder='Valor'/>
                        <input className='form-control' name="amount" ref={amountRef} placeholder='Quantidade'/>
                    </div>
                    <select className='form-select' name="type" ref={eventRef}>
                        <option value="nenhum">Nenhum</option>
                        <option value="Oferta do Dia"> Oferta do Dia </option>
                        <option value="Promoção"> Promoção </option>
                    </select>
                    <select className='form-select' name="event" ref={typeRef}>
                        <option value="grao"> Café em Grão </option>
                        <option value="moido"> Café Moido </option>
                        <option value="capsula"> Capsula </option>
                        <option value="acessorio"> Acessório </option>
                    </select>
                </div>
                <input name="color" ref={colorRef} type="color" className='mt-3' id="inputColor"/>
            </div>
          <Button type="submit" id="btnCadastro"> Cadastrar </Button>
         </div>
        </form>
    )
}

export default FormAddProduct