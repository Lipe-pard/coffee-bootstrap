import './SearchBar.css';
import * as eva from 'eva-icons'
import { useEffect } from 'react';

const SearchBar = () => {
    useEffect(() => {
        eva.replace();
    }, []);
    return(
        <>
        <div class="input-group mb-3 search mx-auto mt-3">
        <input type="text" class="form-control" placeholder="Pesquise por produtos ou marcas" aria-describedby="button-addon1"/>
        <button class="btn btn-secondary" type="button" id="button-addon1">Pesquisar</button>
        </div>
        </>
    )
}

export default SearchBar