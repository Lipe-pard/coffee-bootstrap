import {Button, Card} from 'react-bootstrap'

const FormRegister = () => {
    return(
        <>
         <Card id="cardLogin">
            <h1 className='text-center'> cadastro </h1>
            <input placeholder='Email' className='form-control' type="email"/>
            <input placeholder='Senha' className='form-control' type="password"/>
            <input placeholder='Confirme a Senha' className='form-control' type="password"/>
            <Button className="mx-auto defaltBtn" id="defaltBtn"> Cadastrar-se </Button>
        </Card>
        </>
    )
}

export default FormRegister