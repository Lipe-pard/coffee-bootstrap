import './Capsulas.css';
import {Container} from 'react-bootstrap'
import CardNoValue from './CardNoValue';
import BtnPlusView from './BtnPlusView';

const Capsulas = () => {
    return(
        <div className='container-black p-4'>
            <Container className="d-flex justify-content-between">
                <div className='text-area text-light'> 
                    <h1 className='title'> Capsulas de café </h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <BtnPlusView/>
                </div>
                <CardNoValue />
            </Container>
        </div>
    );
}

export default Capsulas