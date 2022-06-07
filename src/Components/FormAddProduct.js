import './FormAddProduct.css';
import { Button } from 'react-bootstrap'
import {useEffect, useRef} from 'react'
import * as eva from 'eva-icons'
import { useNavigate } from 'react-router-dom';
import {createBrowserHistory} from 'history'

const FormAddProduct = ({products, setProducts}) => {
    
    useEffect(() => {
        eva.replace();
      }, []);

     let navigate = useNavigate();
     let history = createBrowserHistory()

      const nameRef = useRef();
      const discrRef = useRef();
      const valueRef = useRef();
      const amountRef = useRef();
      const typeRef = useRef();
      const eventRef = useRef();
      const colorRef = useRef();
      const imageRef = useRef();

      useEffect(() => {
        nameRef.current.focus();
      })
    
      const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', event.target[0].value);
        formData.append('discription', event.target[1].value);
        formData.append('value', event.target[2].value);
        formData.append('amount', event.target[3].value);
        formData.append('event', event.target[4].value);
        formData.append('type', event.target[5].value);
        formData.append('color', event.target[6].value);
        formData.append('image', event.target[7].value);

        fetch(
          "http://localhost/Api_CoffeeSun/api/product/create",
          {method: 'POST', body: formData}
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
            nameRef.current.focus()
            navigate('/admin')
            alert(data.Mensage)
            setProducts([ data.product, ...products])
          });
      } 
  

    return(
 
        <form onSubmit={(event) => handleSubmit(event)} id="formAddProduct" className='w-100 d-flex flex-row-reverse'>
         <div className='w-50'>
            <input className='form-control' name="name" ref={nameRef} placeholder="Nome"/>
            <textarea className='form-control' name="discription" ref={discrRef} placeholder="discrição"/>
            <div className='d-flex w-100 flex-row-reverse'>
                <div className='p-2 w-100'>
                    <div className='d-flex justify-content-center' id="group-inputs">
                        <input className='form-control' name="value" ref={valueRef} placeholder='Valor'/>
                        <input className='form-control' name="amount" ref={amountRef} placeholder='Quantidade'/>
                    </div>
                    <select className='form-select' name="type" ref={eventRef}>
                        <option value="1">Nenhum</option>
                        <option value="2"> Oferta do Dia </option>
                        <option value="3"> Promoção </option>
                    </select>
                    <select className='form-select' name="event" ref={typeRef}>
                        <option value="1"> Café </option>
                        <option value="2"> Capsula </option>
                    </select>
                </div>
                <input name="color" ref={colorRef} type="color" className='mt-3' id="inputColor"/>
            </div>
         </div>
         <div className='w-50'>
          <input className='form-control' name="image" ref={imageRef} placeholder="imagem"/>
          <input value="Cadastrar" type="submit"/>
         </div>
        </form>


//     <div className='w-50 text-center mt-5' id="up-image">
//         <div id="preview-upload" className='mx-auto'> 
//             <i data-eva="cloud-upload" data-eva-height="150" data-eva-width ="150"> </i>
//         </div>
//         <Button className='mt-4'> Selecionar Foto </Button>         
//     </div>
        // <form className='d-flex flex-row-reverse' onSubmit={(event) => handleSubmit(event)}>
        //     <div id="formAddProduct" className="p-4 w-50 text-center">
        //         <input name="name" ref={nameRef} placeholder="Nome" className='form-control' type="text"/>
        //         <textarea placeholder='Descrição' className='form-control' name="discription" ref={discrRef}/>
        //         <div className='d-flex w-100'>
        //         <input name="color" ref={colorRef} type="color" className='mt-3' id="inputColor"/>
        //         <div className='p-2 w-100'>
        //             <div className='d-flex justify-content-center' id="group-inputs">
        //                 <input className='form-control' name="value" ref={valueRef} placeholder='Valor'/>
        //                 <input className='form-control' name="amount" ref={amountRef} placeholder='Quantidade'/>
        //             </div>
        //             <select className='form-select' name="type" ref={eventRef}>
        //                 <option value="1">Nenhum</option>
        //                 <option value="2"> Oferta do Dia </option>
        //                 <option value="3"> Promoção </option>
        //             </select>
        //             <select className='form-select' name="event" ref={typeRef}>
        //                 <option value="1"> Café </option>
        //                 <option value="2"> Capsula </option>
        //             </select>
        //         </div>
        //         </div>
        //         <Button type="submit" className='p-3' id="btn-cadastro"> Cadastrar </Button>
        //     </div>
        //             <input name="image" type="text" ref={imageRef}/>
        // </form>

    )
}

export default FormAddProduct