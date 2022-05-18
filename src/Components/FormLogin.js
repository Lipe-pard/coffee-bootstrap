import {Button} from 'react-bootstrap'

const FormLogin = () => {
    return(
        <div>
            <h1 className='text-center mt-4 mb-3'> Login </h1>
            <input placeholder='Email' className='form-control' type="email"/>
            <input placeholder='Senha' className='form-control' type="password"/>
            <Button className="mx-auto mt-4"> Entrar </Button>
        </div>
    )
}

export default FormLogin