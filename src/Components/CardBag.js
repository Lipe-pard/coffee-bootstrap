import './CardBag.css';
import {useEffect, useState} from 'react'
import {useBag} from '../Providers/bagProvider'

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

    const {idItens} = useBag()
    const count = parseInt(idItens.length)

    function visible(){
        if(count !== 0){
            return(
                <div className='m-4'>
                  {
                    prod && prod.map((prod) => {
                        return(
                            <div key={prod.id} id="cardBag" className="m-2">
                                <img src={prod.image} className='photoBag'/>
                                <div id="infoCardProd">
                                    <h5> {prod.name} </h5>
                                    <p> {prod.discription} </p>
                                    <h4 id="countValue">  {prod.value} </h4>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            )
        }else{
            return(
                <>
                    <h1> Não há Itens Adicionado a Sacola </h1>
                </>
            )
        }
    }


    return(
        <>
            {visible()}
        </>
    )
}

export default CardBag