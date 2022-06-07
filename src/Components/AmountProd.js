import './AmountProd.css';
import {useState} from 'react'
import { Button } from 'react-bootstrap'

const AmountProd = () => {
    
    const [count, setCount] = useState(1)

    function sub(){
        if(count !== 1){
            setCount(count - 1)
        }
    }

    return(
        <div className='d-flex' id="contProd">
          <Button id="subBtn" onClick={() => sub()}> - </Button>
          <div id="display"> {count} </div>
          <Button id="plusBtn" onClick={() => setCount(count + 1)}> + </Button>
        </div>
    )
}

export default AmountProd