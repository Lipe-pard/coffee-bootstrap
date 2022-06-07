import './Login.css'
import FormLogin from "../Components/FormLogin"
import NavTransparent from '../Components/NavTransparent'

const Login = () => {
    return(
        <>
          <NavTransparent titleBtn="Cadastrar-se" navigationReturn="/loja" navigationRegister="../cadastro"/>
          <FormLogin/>
        </>
    )
}

export default Login