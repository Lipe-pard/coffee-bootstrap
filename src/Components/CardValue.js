import {useEffect, useState} from 'react'
import {Card} from 'react-bootstrap'

const CardValue = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost/Api_CoffeeSun/api/product/select_all")
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, [])

    return(
        <>
        {product &&
      product.map((product) => {
        return (
          <Card key={product.id} className="border-0 card-product m-3">
            <div className='bg-product' style={{background: product.color}}></div>
            <h5>{product.name}</h5>
            <p>{product.discription}</p>
            <h4 className='text-center'> {product.value} </h4>
          </Card>
        )
      })
    }
        </>
    )
}

export default CardValue