import './CoffeeHome.css';
import {Container} from 'react-bootstrap'
import CardNoValue from './CardNoValue';
import BtnPlusView from './BtnPlusView';

const CoffeeHome = () => {
    return(
        <div className='container-black p-4'>
            <Container className="d-flex justify-content-between mt-5 p-5">
                <div className='text-area text-light'> 
                    <h1 className='title'> Cafés Premium </h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make 
                        a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <BtnPlusView/>
                </div>
                <CardNoValue color={"#1c2759"} type="moido" image={"https://loja.cafexcelsior.com.br/storage/products/cafe-excelsior-extraforte-500g-xCfkJtehvuz2WDR9jwPx.png"}/>
            </Container>
        </div>
    );
}

export default CoffeeHome