import './CardBag.css';
import {useEffect, useState} from 'react'
import AmountProd from './AmountProd';
const CardBag = () => {

    const [prod, setProd] = useState(null)

    useEffect(()=>{
        const bagdata = localStorage.getItem('bagItens')
		const bag = JSON.parse(bagdata)
        const strigItens = bag.join(',')
        fetch("http://localhost/Api_CoffeeSun/api/product/select_ids/?id="+strigItens)
            .then((response) => response.json())
            .then((data) => {setProd(data)});
    }, [])

    return(
        <div className='m-4'>
        {
           prod && prod.map((prod) => {
               return(
                   <div key={prod.id} id="cardBag" className="m-3">
                       <div id="imageCard">

                       </div>
                       <div id="infoCardProd">
                        <h5> {prod.name} </h5>
                        <p> {prod.discription} </p>
                        <div className="d-flex justify-content-between" id="countValue">
                        <AmountProd />
                        <h5> R$ {prod.value} </h5>
                        </div>
                       </div>
                   </div>
               )
           })
        }
        </div>
    )
}

export default CardBag