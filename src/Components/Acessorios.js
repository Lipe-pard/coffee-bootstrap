import './Acessorios.css';
import {Container} from 'react-bootstrap'
import CardNoValue from './CardNoValue';
import BtnPlusView from './BtnPlusView';

const Acessorios = () => {
    return(
        <div className='container-white p-4'>
            <Container className="d-flex justify-content-between mt-5 p-5">
                <CardNoValue className="card-black" color={"#37363b"} type={'acessorio'} image={"https://res.cloudinary.com/riqra/image/upload/w_906,h_906,c_limit,q_auto,f_auto/v1630101787/sellers/villa-alta/1607631425421.png"}/>
                <div className='text-area'> 
                    <h1 className='title'> Acessórios </h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <BtnPlusView/>
                </div>
            </Container>
        </div>
    );
}

export default Acessorios