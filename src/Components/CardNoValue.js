import './CardNoValue.css';
import { Card } from 'react-bootstrap'

const CardNoValue = (props) => {

    const color = props.color
    const image = props.image
    const type = props.type

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
        <Card className='card-product border-0'>
            <img src={image} alt="photo coffee" className={typeImage(type)} />
            <div className='bg-product' style={{background: color}}></div>
            <h5> Café Excelsior Extraforte </h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
            </p>
        </Card>
    )
}

export default CardNoValue