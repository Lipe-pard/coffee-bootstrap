import './CardValue.css'
import {useEffect, useState} from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardValue = () => {
    const [product, setProduct] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/Api_CoffeeSun/api/product/select_all")
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [])

    function typeImage(type){
      if(type === 'moido' || type === 'grao'){
       return(
        'photo'
       )
      }else if(type === 'acessorio'){
        return(
          'photoAcess'
         )
      }else if(type === 'capsula'){
       return(
        'photoCaps'
       )
      }
    }

    return(
        <>
        
        {product &&
      product.map((product) => {
        return (
          <>
          <Card key={product.id} className="border-0 card-product m-3" onClick={() => {navigate('../../produto/'+product.id)}} id="cardProd">
            <img src={product.image} alt="photo coffee" className={typeImage(product.type)} />
            <div className='bg-product' style={{background: product.color}}>
            </div>
            <h5>{product.name}</h5>
            <p>{product.discription}</p>
            <h4 className='text-center'> {product.value} </h4>
          </Card>
          </>
        )
      })
    }
        </>
    )
}

export default CardValue