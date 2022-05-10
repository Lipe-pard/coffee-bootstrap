import CardValue from '../Components/CardValue'
import SearchBar from '../Components/SearchBar'
import './Shop.css';

const Shop = () => {
    return(
        <>
        <SearchBar/>
        <div className='p-4 d-flex' id="list-product"> 
         <CardValue/>
        </div>
        </>
    )
}

export default Shop
