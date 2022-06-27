import {Button, Card} from 'react-bootstrap'
import {useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const FormRegister = () => {
    
    const navigate = useNavigate()

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('name', event.target[0].value);
        formData.append('email', event.target[1].value);
        formData.append('pass', event.target[2].value);

        fetch(
            "http://localhost/Api_CoffeeSun/api/user/create",
            {method: 'POST', body: formData}
        )

        .then((response) => response.json())
          .then((data) => {
            nameRef.current.value = ''
            emailRef.current.value = ''
            passRef.current.value = ''
            alert(data.Mensage)
            navigate('/login')
          });
    }

    return(
        <>
         <Card id="cardLogin">
            <h1 className='text-center'> cadastro </h1>
            <form onSubmit={(event) => handleSubmit(event)} className="text-center">
                <input ref={nameRef} placeholder='Nome' className='form-control' type="text"/>
                <input ref={emailRef} placeholder='Email' className='form-control' type="email"/>
                <input ref={passRef} placeholder='Senha' className='form-control' type="password"/>
                <Button type="submit" className="mx-auto defaltBtn" id="defaltBtn"> Cadastrar-se </Button>
            </form>
        </Card>
        </>
    )
}

export default FormRegister