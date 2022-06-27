import './UpdateProduct.css';
import { useEffect, useState} from "react"
import {useNavigate, useParams} from 'react-router-dom'
import SubHeader from '../Components/SubHeader';

const UpdateProduct = () => {

    const {prodId} = useParams()
    const [product, setProd] = useState()
    const navigate = useNavigate()

    let dadosUser = window.localStorage.getItem('userLogged')
    let user = JSON.parse(dadosUser)

    useEffect(() => {
        fetch("http://localhost/Api_CoffeeSun/api/product/select_id/?id="+prodId)
            .then((response) => response.json())
            .then((data) => setProd(data));
    }, [prodId]);

    function selectEvent(event){
        if(event === "nenhum"){
            return(
                <>
                    <option value="nenhum"> Nenhum </option>
                    <option value="Oferta do Dia"> Oferta do dia </option>
                    <option value="Promoção"> Promoção </option>
                </>
            )
        }else if(event === ''){
            return(
                <>
                    <option value="nenhum"> Nenhum </option>
                    <option value="Oferta do Dia"> Oferta do dia </option>
                    <option value="Promoção"> Promoção </option>
                </>
            )
        }else if(event === 'Oferta do dia'){
            return(
                <>
                    <option value="Oferta do Dia"> Oferta do dia </option>
                    <option value="nenhum"> Nenhum </option>
                    <option value="Promoção"> Promoção </option>
                </>
            )
        }else if(event === 'Promoção'){
            return(
            <>
                    <option value="Promoção"> Promoção </option>
                    <option value="nenhum"> Nenhum </option>
                    <option value="Oferta do Dia"> Oferta do dia </option>
            </>
            )
        }
    }

    function selectType(type){
        if(type === ''){
            return(
                <>
                    <option value="grao"> Café em Grão </option>
                    <option value="moido"> Café Moídos </option>
                    <option value="capsula">Cápsula</option>
                    <option value="acessorio"> Acessório </option>
                </>
            )
        }else if(type === 'grao'){
            return(
                <>
                    <option value="grao"> Grão </option>
                    <option value="moido"> Moídos </option>
                    <option value="capsula">Cápsula</option>
                    <option value="acessorio"> Acessório </option>
                </>
            )   
        }
        else if(type === 'moido'){
            return(
                <>
                    <option value="moido"> Moídos </option>
                    <option value="grao"> Grão </option>
                    <option value="capsula">Cápsula</option>
                    <option value="acessorio"> Acessório </option>
                </>
            )
        }else if(type === 'capsula'){
            return(
                <>
                    <option value="capsula">Cápsula</option>
                    <option value="moido"> Moídos </option>
                    <option value="grao"> Grão </option>
                    <option value="acessorio"> Acessório </option>
                </>
            )
        }else if(type === 'acessorio'){
            return(
                <>
                    <option value="acessorio"> Acessório </option>
                    <option value="capsula">Cápsula</option>
                    <option value="moido"> Moídos </option>
                    <option value="grao"> Grão </option>
                </>
            )
        }
    }

    const handleSubmit = (event) => {
       event.preventDefault()
       const formData = new FormData();
       formData.append('id', prodId)
       formData.append('image', event.target[0].value)
       formData.append('name', event.target[1].value)
       formData.append('discription', event.target[2].value)
       formData.append('value', event.target[3].value)
       formData.append('amount', event.target[4].value)
       formData.append('color', event.target[5].value)
       formData.append('event', event.target[6].value)
       formData.append('type', event.target[7].value)
       fetch(
           "http://localhost/Api_CoffeeSun/api/product/update",
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
            if(data?.product?.id){
                alert(data.Mensage)
                navigate('../');
            } else if(data?.Mensage){
                alert(data.Mensage)
            } else {
                console.log(data)
            }
        })
    }

    return(
        <>
        <SubHeader titlePage={"Editar Produto"}/>
         {product ? (
            <>
             {
                product.map((product) => {

                    return(
                        <div key={prodId}>
                                <div className="d-flex">
                                <div className="w-25 m-3">
                                    <img src={product.image} alt="Imagem do café" id="photoCoffee"/>
                                </div>
                                <div className="w-75">
                                    <form onSubmit={(event) => handleSubmit(event)} id="formUpProduct" className="mx-auto m-3">
                                        <input defaultValue={product.image} className="w-100 mb-2 mt-2" placeholder="URL da Imagem"/>
                                        <input defaultValue={product.name} type="text" className="w-100" placeholder="Name"/>
                                        <textarea defaultValue={product.discription} className="form-control" placeholder="Descrição"/>
                                        <div className="w-100">
                                            <input className="input-flex" defaultValue={product.value} placeholder="Valor"/>
                                            <input className="input-flex" defaultValue={product.amount} type="text" placeholder="Quantidade"/>
                                        </div>
                                        <div className='d-flex'>
                                            <input type="color" defaultValue={product.color} id="inputColorUp"/>
                                            <div className='w-75'>
                                                <div>
                                                    <select className='' name="event">
                                                        {selectEvent(product.event)}
                                                    </select>
                                                </div>
                                                <div className='' name="type">
                                                    <select>
                                                        {selectType(product.type)}
                                                    </select>
                                                </div>    
                                            </div>                                            
                                        </div>
                                        <input type="submit" className="mt-4" value="Editar" id="btnUp"/>
                                    </form>
                                </div>
                            </div>
                      
                        </div>
                    )
                })
             }
            </>
         )
        :
        (
            <>
            <p> Não Encontrado </p>
            </>
        )
        }
        </>
    )
}

export default UpdateProduct