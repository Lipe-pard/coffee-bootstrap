import './NavTransparent.css';
import { Button } from 'react-bootstrap'
import { useEffect } from 'react'
import * as eva from 'eva-icons'
import { useNavigate } from 'react-router-dom'

const NavTransparent = (props) => {

    useEffect(() => {
        eva.replace();
    }, []);

    let navigate = useNavigate();

    return(
        <>
         <header id="navTrasparent" className="d-flex justify-content-between w-100 p-4 mt-3">
           <Button onClick={() => { navigate(props.navigationReturn) }} id="return">
           <i data-eva="arrow-back-outline" data-eva-height="30" data-eva-width ="30" data-eva-fill="#FFF"> </i>
           </Button>
           <Button id="btnOutline" onClick={() => { navigate(props.navigationRegister) }}> {props.titleBtn} </Button>
         </header>
        </>
    )
}

export default NavTransparent