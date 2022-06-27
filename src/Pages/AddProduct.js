import FormAddProduct from "../Components/FormAddProduct"
import SubHeader from "../Components/SubHeader"

const AddProduct = () => {
    return(
        <div>
         <SubHeader titlePage={"Criar Novo Produto"}/>
         <FormAddProduct/>
        </div>
    )
}

export default AddProduct