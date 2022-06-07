import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const FormLogin = () => {
    return(
        <Card id="cardLogin">
            <h1 className='text-center'> Login </h1>
            <input placeholder='Email' className='form-control' type="email"/>
            <input placeholder='Senha' className='form-control' type="password"/>
            <Link to="/" className='reset-pass'> Esqueceu sua senha ? </Link>
            <Button className="mx-auto defaltBtn" id="defaltBtn"> Entrar </Button>
        </Card>
    )
}

export default FormLogin