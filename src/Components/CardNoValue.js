import './CardNoValue.css';
import { Card } from 'react-bootstrap'

const CardNoValue = () => {
    return(
        <Card className='card-product border-0'>
            <div className='bg-product'></div>
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