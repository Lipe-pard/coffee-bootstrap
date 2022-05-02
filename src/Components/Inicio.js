import './Inicio.css';
import Overlay from "./Overlay";
import HeaderHome from './HeaderHome';
import Logo from '../Assets/Logo.svg'
import { Button } from 'react-bootstrap'
import { BiDownArrowAlt } from "react-icons/bi";

const Inicio = () => {
    return(
     <div className="bg">
       <HeaderHome/>
       <Overlay />
       <img src={Logo} alt="logo do site" className='logoGrande'/>
       <Button className='rounded-circle btn-down border-0'> 
        <BiDownArrowAlt />
       </Button>
     </div>
    );
}

export default Inicio