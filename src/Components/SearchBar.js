import './SearchBar.css';
import { InputText } from 'primereact/inputtext';
import {Button} from 'react-bootstrap'

const SearchBar = () => {

    return(
        <div className='d-flex justify-content-center' id="searchBar">
        <div className="p-input-icon-left search">
        <i className="pi pi-search" />
        <InputText type="text" placeholder="Pesquise por produtos ou marcas" className='search-input'/>   
        </div>
        <Button className='btns btn-search'> Pesquisar </Button>
        </div>
    )
}

export default SearchBar