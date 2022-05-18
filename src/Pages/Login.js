import './Login.css'
import {Card} from "react-bootstrap"
import FormLogin from "../Components/FormLogin"
import Overlay from "../Components/Overlay"

const Login = () => {
    return(
        <>
         <div className="bg">
          <Overlay />
          <Card id="cardLogin">
              <FormLogin/>
          </Card>
         </div>
        </>
    )
}

export default Login