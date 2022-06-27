import './InfoCep.css'
import {Button} from 'react-bootstrap'
import * as eva from 'eva-icons'
import { useEffect } from 'react'

const InfoCep = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    return(
        <div className="w-100 text-center">
                <h5 id="titleCep"> Consulte seu Cep </h5> 
                <div className="d-flex w-50 mx-auto informCep">
                    <Button id="buttonConfirm"> Consultar </Button>
                    <input placeholder='CEP' className='form-control'/>
                </div>
        </div>
    )
}

export default InfoCep