import './DashboardAdmin.css';
import {Button} from 'react-bootstrap'
import CardAdmin from '../Components/CardAdmin'
import {useNavigate} from 'react-router-dom'

const DashboardAdmin = () => {
    
    let navigate = useNavigate()

    return(
        <>
        <div className='d-flex justify-content-between w-100 p-4'>
          <h3 className="title-pages"> Lista de Produtos </h3>
          <Button id="addNewProduct" className="p-3" onClick={() => {navigate('adicionar-produto')}}> Cadastrar novo Produto </Button>
        </div>
        <div className="d-flex p-4" id="list-product"> 
            <CardAdmin/>
         </div>
        </>

    )
}

export default DashboardAdmin