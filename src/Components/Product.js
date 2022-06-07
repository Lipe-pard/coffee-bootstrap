import './Product.css';
import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useBag, saveBagLocalStorage } from '../Providers/bagProvider';

const Product = () => {

    const { prodId } = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost/Api_CoffeeSun/api/product/select_id/?id="+prodId)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [prodId]);

    const {idItens, setIdItens} = useBag()

    function addBag(id) {
        if(idItens.includes(id)){
            alert("Item já adicionado a sacola")
        }else{
            setIdItens([...idItens, id])
            saveBagLocalStorage([...idItens, id])
        }
        
    }

    return(
        <>
        <>
         {
            product ? (
                <>
                  {
                      product.map(prod => (
                       <div className='d-flex justify-content-center p-5'>
                           <div id='imgProd'>
                               <div className="mx-auto"></div>
                           </div>
                            <div id='infoProd' className='mb-3'>
                                <h1 id="titleProd"> {prod.name} </h1>
                                <p id="discriptionProd"> {prod.discription} </p>
                                <div className="d-flex justify-content-between" id="subProd"> 
                                  <h1 id="valueProd"> R$ {prod.value} </h1>
                                  <input id="amountProd" max={prod.amount} min={1} maxLength={3} defaultValue={1} type="text"/>
                                </div>
                                <div className="d-flex justify-content-between" id="optionProd">
                                <button className='btn' id="compra" onClick={() => navigate('/sacola')}> Comprar Agora </button>
                                <button className='btn' id="addBag" onClick={() => addBag(prodId)}> Adicionar a Sacola </button>
                                </div>
                            </div>
                       </div>
                        
                      ))
                  }
                </>
             )
             :
             (
                 <p> Erro ao localizar o produto </p>
             )
         }
        </>
        </>
    )
}

export default Product