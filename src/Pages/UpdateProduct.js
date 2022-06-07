import { useEffect, useState} from "react"
import {useNavigate, useParams} from 'react-router-dom'

const UpdateProduct = () => {

    const {prodId} = useParams()
    const [prod, setProd] = useState()
    const navigate = useNavigate()

    useEffect(()=>{

    fetch("http://localhost/Api_CoffeeSun/api/product/select_id/?id="+prodId)
    .then((response) => response.json())
    .then((data) => setProd(data));

    }, [prodId])

    const handleSubmit = (event) => {
       event.preventDefalt()
       const formData = FormData();
       formData.append('id', prodId)
       formData.append('name', event.target[0].value)
       formData.append('discription', event.target[1].value)
       formData.append('value', event.target[2].value)
       formData.append('amount', event.target[3].value)
       formData.append('event', event.target[4].value)
       formData.append('type', event.target[5].value)
       formData.append('color', event.target[6].value)
       formData.append('image', event.target[7].value)
       fetch(
           "http://localhost/Api_CoffeeSun/api/product/update",
           {method: 'POST', body: formData}
       )
        .then((response) => response.json())
        .then((data) => {
            if(data?.prod?.id){
                navigate('/admin');
                alert(data.Mensage)
            } else if(data?.Mensage){
                alert(data.Mensage)
            } else {
                console.log(data)
            }
        })
    }

    return(
        <>
          {prod ? (
              <>
              <form onSubmit={(event) => handleSubmit(event)}>
                 <input defaultValue={prod.name} type="text"/>
                 {console.log(prod)}
                 <button type="submit"> Enviar </button>
              </form>
              </>
          )
          :
          (
              <p> Produto não encontrado </p>
          )
        }
        </>
    )
}

export default UpdateProduct