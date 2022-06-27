import './SubHeader.css'
import {Button} from 'react-bootstrap'
import {useEffect} from 'react'
import * as eva from 'eva-icons'

const SubHeader = (props) => {

    useEffect(() => {
        eva.replace();
    }, [])

    function navigateBack(){
        window.history.back()
    }

    return(
        <div className="w-100 d-flex p-5" id="head">
            <Button onClick={() => navigateBack()}> 
             <i data-eva="arrow-ios-back-outline" data-eva-height="30" data-eva-width ="30"/> 
            </Button>
            <h3 id="titlePage"> {props.titlePage} </h3>
        </div>
    )
}

export default SubHeader