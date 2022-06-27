import './DashboardAdmin.css';
import {Button} from 'react-bootstrap'
import CardAdmin from '../Components/CardAdmin'
import {useNavigate} from 'react-router-dom'
import HeaderAdmin from '../Components/HeaderAdmin'
import Footer from '../Components/Footer'
const DashboardAdmin = () => {
    
    let navigate = useNavigate()

    return(
        <>
        <HeaderAdmin/>
        <div className='d-flex justify-content-between w-100 p-4' id="opAdmin">
          <h3 className="title-pages"> Lista de Produtos </h3>
          <Button id="addNewProduct" className="p-3" onClick={() => {navigate('adicionar-produto')}}> Cadastrar novo Produto </Button>
        </div>
        <div className="d-flex p-4" id="list-product"> 
            <CardAdmin/>
         </div>
        <Footer/>
        </>

    )
}

export default DashboardAdmin