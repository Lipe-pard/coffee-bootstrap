import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

const FormLogin = () => {


    const emailRef = useRef();
    const passRef = useRef();

    const navigate = useNavigate()


    useEffect(() => {
    emailRef.current.focus()
    }, [emailRef])

    const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('email', event.target[0].value);
    formData.append('pass', event.target[1].value);
    fetch(
        "http://localhost/Api_CoffeeSun/api/auth/login",
        {method: 'POST', body: formData}
    )
        .then(async (response) => {
            if(response.status === 200){
                let data = await response.json()
                localStorage.setItem('userLogged', JSON.stringify(data.session));
                let dadosUser = window.localStorage.getItem('userLogged')
                let user = JSON.parse(dadosUser)
                if(user.roles === 'admin'){
                    navigate('/admin')
                }else if(user.roles === 'client'){
                    navigate('/loja')
                }
            } else {
                alert('erro ao logar')
            }
        })
    } 

    return(
        <Card id="cardLogin">
            <h1 className='text-center'> Login </h1>
            <form onSubmit={(event) => handleSubmit(event)} className="text-center">
                <input placeholder='Email' className='form-control' type="email" ref={emailRef}/>
                <input placeholder='Senha' className='form-control' type="password" ref={passRef}/>
                <div className="text-start">
                    <Link to="/" className='reset-pass'> Esqueceu sua senha ? </Link>
                </div>
                <Button type="submit" className="defaltBtn" id="defaltBtn"> Entrar </Button>
            </form>
        </Card>
    )
}

export default FormLogin