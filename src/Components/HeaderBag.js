import './HeaderBag.css';
import {Button, Nav} from 'react-bootstrap'
import {useEffect} from 'react'
import * as eva from 'eva-icons'

const HeaderBag = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    function navigateBack(){
        window.history.back()
    }

    return(
        <Nav className='w-50 p-4 d-flex' id="headerBag">
          <Button onClick={() => navigateBack()} id="returnPage"> 
            <i data-eva="arrow-ios-back-outline" data-eva-height="30" data-eva-width="30"/>
          </Button>
          <div className='d-flex' id="titleBag">
            <i data-eva="shopping-bag-outline" data-eva-height="65" data-eva-width="65"/>
            <h3 className='mt-2'> Sacola </h3>
          </div>
        </Nav>
    )
}

export default HeaderBag