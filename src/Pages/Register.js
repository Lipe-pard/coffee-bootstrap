import FormRegister from "../Components/FormRegister"
import NavTransparent from "../Components/NavTransparent"

const Regiter = () => {
    return(
        <>
         <NavTransparent titleBtn="Login" navigationReturn="/loja" navigationRegister="../../login"/>
         <FormRegister/>
        </>
    )
}

export default Regiter