import './CardAdmin.css';
import {useEffect, useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import { useNavigate,} from 'react-router-dom'
import OptionsBtn from './OptionsCard';
import * as eva from 'eva-icons'

const CardAdmin = () => {

    const [product, setProduct] = useState(null);

    let dadosUser = window.localStorage.getItem('userLogged')
    let user = JSON.parse(dadosUser)

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
        body: formData,
        headers: {
          "Access-Token": user.token
        }}
        )
        .then((response) => response.json())
        .then((data) => {
          alert(data.Mensage)
          let prodFiltered = product.filter((product) =>{ 
            return product.id !== prodId;
          });
          setProduct(prodFiltered)
        });   
  }

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
          <Card key={product.id} className="border-0 card-product m-3">
            <img src={product.image} alt="photo coffee" id='photo' className={typeImage(product.type)}/>
            <div className='bg-product' style={{background: product.color}}></div>
            <h5>{product.name}</h5>
            <p id="disc-admin">{product.discription}</p>
            <h4 className='text-center' id='price-admin'> R$ {product.value} </h4>
            <OptionsBtn handleTrashClick={handleTrashClick} products={product}/>
          </Card>
        )
      })
    }
        </>
    )
}

export default CardAdmin