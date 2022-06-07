import './CardAdmin.css';
import {useEffect, useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import { useNavigate,} from 'react-router-dom'
import OptionsBtn from './OptionsCard';
import * as eva from 'eva-icons'

const CardAdmin = () => {

    const [product, setProduct] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {

        eva.replace();

        fetch("http://localhost/Api_CoffeeSun/api/product/select_all")
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [])

    const handleTrashClick = (prodId) => {
      const formData = new FormData();
      formData.append('id', prodId);
      fetch("http://localhost/Api_CoffeeSun/api/product/delete", {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.Mensage)
          let prodFiltered = product.filter((product) =>{ 
            return product.id !== prodId;
          });
          setProduct(prodFiltered)
        });   
  }
 
    return(
        <>
        {product &&
      product.map((product) => {
        return (
          <Card key={product.id} className="border-0 card-product m-3">
            <div className='bg-product' style={{background: product.color}}></div>
            <h5>{product.name}</h5>
            <p id="disc-admin">{product.discription}</p>
            <h4 className='text-center' id='price-admin'> {product.value} </h4>
            <OptionsBtn handleTrashClick={handleTrashClick} products={product}/>
          </Card>
        )
      })
    }
        </>
    )
}

export default CardAdmin